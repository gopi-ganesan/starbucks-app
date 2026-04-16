import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Order = () => {
  const { cartItems, subtotal, addItem, removeItem } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className='min-h-[400px] px-4 py-24 text-center text-[#1e3932] sm:px-10 md:px-24'>
        <h1 className='text-3xl font-s_bold'>Your order is empty</h1>
        <p className='mt-4 text-sm sm:text-base'>Add something from the dashboard to see it here.</p>
        <Link to="/dashboard" className='mt-6 inline-block rounded-full bg-green-800 px-6 py-3 text-white'>
          Browse menu
        </Link>
      </div>
    )
  }

  return (
    <section className='min-h-[400px] bg-[#f9f9f4] px-4 py-10 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-5xl'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <h1 className='text-3xl font-s_bold'>Your checkout</h1>
            <p className='text-sm text-[#5a6b65]'>Review items before you continue to payment.</p>
          </div>
          <Link to="/pay" className='inline-block rounded-full bg-green-800 px-6 py-3 text-center text-white'>
            Continue to pay
          </Link>
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]'>
          <div className='space-y-4'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm'>
                <div>
                  <h2 className='text-lg font-s_bold'>{item.title}</h2>
                  <p className='mt-1 text-sm text-[#5a6b65]'>
                    {item.gram} ML | {item.kcal} kcal
                  </p>
                  <p className='mt-2 text-sm font-s_bold'>Rs. {item.amount.toFixed(2)}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <button
                    className='h-9 w-9 rounded-full border border-[#1e3932] text-lg'
                    onClick={() => removeItem(item.id)}
                    type="button"
                  >
                    -
                  </button>
                  <span className='min-w-[24px] text-center font-s_bold'>{item.quantity}</span>
                  <button
                    className='h-9 w-9 rounded-full bg-green-800 text-lg text-white'
                    onClick={() => addItem(item)}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className='rounded-3xl bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-s_bold'>Summary</h2>
            <div className='mt-4 flex justify-between text-sm'>
              <span>Items</span>
              <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className='mt-3 flex justify-between text-sm'>
              <span>Subtotal</span>
              <span>Rs. {subtotal.toFixed(2)}</span>
            </div>
            <div className='mt-3 flex justify-between text-sm'>
              <span>Delivery</span>
              <span>Rs. 40.00</span>
            </div>
            <div className='mt-4 border-t pt-4 flex justify-between font-s_bold'>
              <span>Total</span>
              <span>Rs. {(subtotal + 40).toFixed(2)}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Order
