import React from 'react'
import { Link } from 'react-router-dom'

const Rewards = () => {
  return (
    <section className='min-h-[420px] bg-[#f7f1e7] px-4 py-12 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-sm'>
        <p className='text-sm uppercase tracking-[0.2em] text-[#5a6b65]'>Starbucks Rewards</p>
        <h1 className='mt-3 text-3xl font-s_bold'>Rewards are pouring</h1>
        <p className='mt-4 max-w-2xl text-sm text-[#5a6b65] sm:text-base'>
          Join the rewards experience, collect stars, and jump back into the menu whenever you are ready to order.
        </p>
        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
          <Link to="/ordering" className='rounded-full bg-green-800 px-6 py-3 text-center text-white'>
            Order now
          </Link>
          <Link to="/dashboard" className='rounded-full border border-green-800 px-6 py-3 text-center text-green-800'>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Rewards
