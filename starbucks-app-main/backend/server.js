const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

function buildMongoUri() {
  const { MONGO_URI, MONGO_USER, MONGO_PASSWORD } = process.env;

  if (!MONGO_URI) {
    return null;
  }

  if (!MONGO_USER || !MONGO_PASSWORD) {
    return MONGO_URI;
  }

  const url = new URL(MONGO_URI);
  url.username = MONGO_USER;
  url.password = MONGO_PASSWORD;

  if (!url.searchParams.has('authSource')) {
    url.searchParams.set('authSource', 'admin');
  }

  return url.toString();
}

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./src/routes/product'));
app.use('/api/orders',   require('./src/routes/order'));
app.use('/api/users',    require('./src/routes/user'));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const mongoUri = buildMongoUri();

if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.error('MongoDB Error:', err));
} else {
  console.warn('MONGO_URI not set, starting without database connection');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
