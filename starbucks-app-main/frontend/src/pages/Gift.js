import React from 'react'
import { Link } from 'react-router-dom'
import giftFeatureOne from "../assests/img/giftFeature1.png"
import giftFeatureTwo from "../assests/img/giftFeature2.png"
import giftFeatureThree from "../assests/img/giftFeature3.jpg"
import giftFeatureFour from "../assests/img/giftFeature4.png"

const giftCollections = [
  {
    title: "Birthday picks",
    description: "Celebration-ready Starbucks gifts for the next special date.",
    image: giftFeatureOne,
  },
  {
    title: "Coffee bundles",
    description: "Curated treats for people who love coffee at home and in store.",
    image: giftFeatureTwo,
  },
  {
    title: "Sweet surprises",
    description: "Gift-worthy desserts, festive add-ons, and cafe-style extras.",
    image: giftFeatureThree,
  },
  {
    title: "Thank-you cards",
    description: "A quick way to send a thoughtful Starbucks moment.",
    image: giftFeatureFour,
  },
]

const Gift = () => {
  return (
    <section className='min-h-[420px] bg-[#f4f0eb] px-4 py-10 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='rounded-[36px] bg-white p-8 shadow-sm'>
          <p className='text-sm uppercase tracking-[0.2em] text-[#5a6b65]'>Gift</p>
          <h1 className='mt-3 text-3xl font-s_bold'>Send a Starbucks gift</h1>
          <p className='mt-4 max-w-2xl text-sm text-[#5a6b65] sm:text-base'>
            The gift page now has working image cards and clear next steps instead of a blank screen.
          </p>
          <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <Link to="/rewards" className='rounded-full bg-green-800 px-6 py-3 text-center text-white'>
              View rewards
            </Link>
            <Link to="/ordering" className='rounded-full border border-green-800 px-6 py-3 text-center text-green-800'>
              Order for gifting
            </Link>
          </div>
        </div>

        <div className='mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {giftCollections.map((item) => (
            <article key={item.title} className='overflow-hidden rounded-[28px] bg-white shadow-sm'>
              <img src={item.image} alt={item.title} className='h-52 w-full object-cover' />
              <div className='p-5'>
                <h2 className='text-xl font-s_bold'>{item.title}</h2>
                <p className='mt-2 text-sm text-[#5a6b65]'>{item.description}</p>
                <Link to="/ordering" className='mt-4 inline-block text-sm font-s_bold text-green-800'>
                  Continue
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gift
