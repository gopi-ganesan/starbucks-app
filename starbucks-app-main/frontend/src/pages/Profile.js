import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className='min-h-[420px] bg-[#f7f1e7] px-4 py-12 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-sm'>
        <p className='text-sm uppercase tracking-[0.2em] text-[#5a6b65]'>Profile</p>
        <h1 className='mt-3 text-3xl font-s_bold'>Your Starbucks profile</h1>
        <p className='mt-4 max-w-2xl text-sm text-[#5a6b65] sm:text-base'>
          Your profile page is now connected to the app navigation. You can build account details, saved orders, and rewards history here next.
        </p>
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          <div className='rounded-[28px] bg-[#f9f9f4] p-5'>
            <p className='text-sm text-[#5a6b65]'>Account</p>
            <h2 className='mt-2 text-xl font-s_bold'>Guest User</h2>
            <p className='mt-2 text-sm text-[#5a6b65]'>Sign in support can be added here when you are ready.</p>
          </div>
          <div className='rounded-[28px] bg-[#f9f9f4] p-5'>
            <p className='text-sm text-[#5a6b65]'>Quick actions</p>
            <div className='mt-4 flex flex-col gap-3'>
              <Link to="/ordering" className='rounded-full bg-green-800 px-5 py-3 text-center text-white'>
                View checkout
              </Link>
              <Link to="/rewards" className='rounded-full border border-green-800 px-5 py-3 text-center text-green-800'>
                Open rewards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
