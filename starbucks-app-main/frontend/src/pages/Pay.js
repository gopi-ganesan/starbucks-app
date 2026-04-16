import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Pay = () => {
  const { cartItems, subtotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className='min-h-[400px] px-4 py-24 text-center text-[#1e3932] sm:px-10 md:px-24'>
        <h1 className='text-3xl font-s_bold'>Nothing to pay yet</h1>
        <p className='mt-4 text-sm sm:text-base'>Build your order first and then come back here to complete checkout.</p>
        <Link to="/dashboard" className='mt-6 inline-block rounded-full bg-green-800 px-6 py-3 text-white'>
          Add items
        </Link>
      </div>
    )
  }

  return (
    <section className='min-h-[400px] bg-[#f4f0eb] px-4 py-10 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-sm'>
        <h1 className='text-3xl font-s_bold'>Payment</h1>
        <p className='mt-2 text-sm text-[#5a6b65]'>Your order is ready for checkout.</p>

        <div className='mt-8 space-y-3'>
          {cartItems.map((item) => (
            <div key={item.id} className='flex justify-between rounded-2xl bg-[#f9f9f4] px-4 py-3 text-sm'>
              <span>{item.title} x {item.quantity}</span>
              <span>Rs. {(item.amount * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className='mt-8 border-t pt-6'>
          <div className='flex justify-between text-sm'>
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className='mt-3 flex justify-between text-sm'>
            <span>Delivery</span>
            <span>Rs. 40.00</span>
          </div>
          <div className='mt-4 flex justify-between text-lg font-s_bold'>
            <span>Total</span>
            <span>Rs. {(subtotal + 40).toFixed(2)}</span>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
          <button
            className='rounded-full bg-green-800 px-6 py-3 text-white'
            onClick={clearCart}
            type="button"
          >
            Place order
          </button>
          <Link to="/ordering" className='rounded-full border border-green-800 px-6 py-3 text-center text-green-800'>
            Back to checkout
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Pay
