import React from 'react'
import { Link } from 'react-router-dom'
import { HandcraftedCurations } from '../data'
import storeHero from "../assests/img/Welcome_Website_page.jpg"
import latestOfferingOne from "../assests/img/LatestOfferings1.jpg"
import latestOfferingTwo from "../assests/img/LatestOfferings2.jpg"
import latestOfferingThree from "../assests/img/LatestOfferings3.jpg"

const featuredStores = [
  {
    title: "Reserve experiences",
    description: "Explore rich coffee stories, premium blends, and elevated cafe moments.",
    image: latestOfferingOne,
    link: "/search?category=CoffeeAtHome",
  },
  {
    title: "Fresh pairings",
    description: "See what is new across food, drinks, and ready-to-eat combinations.",
    image: latestOfferingTwo,
    link: "/search?category=Food",
  },
  {
    title: "Merch picks",
    description: "Browse mugs, tumblers, and everyday Starbucks-style essentials.",
    image: latestOfferingThree,
    link: "/search?category=Merchandise",
  },
]

const Store = () => {
  return (
    <section className='min-h-[420px] bg-[#f7f1e7] px-4 py-10 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
          <div className='overflow-hidden rounded-[36px] bg-white shadow-sm'>
            <img src={storeHero} alt="Starbucks store interior" className='h-[280px] w-full object-cover' />
            <div className='p-8'>
              <p className='text-sm uppercase tracking-[0.2em] text-[#5a6b65]'>Store</p>
              <h1 className='mt-3 text-3xl font-s_bold'>Find your next Starbucks moment</h1>
              <p className='mt-4 max-w-2xl text-sm text-[#5a6b65] sm:text-base'>
                The store page is now a real destination with featured collections and image cards instead of a blank placeholder.
              </p>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <Link to="/ordering" className='rounded-full bg-green-800 px-6 py-3 text-center text-white'>
                  Start order
                </Link>
                <Link to="/search" className='rounded-full border border-green-800 px-6 py-3 text-center text-green-800'>
                  Explore menu
                </Link>
              </div>
            </div>
          </div>

          <div className='rounded-[36px] bg-[#1e3932] p-8 text-white shadow-sm'>
            <p className='text-sm uppercase tracking-[0.2em] text-[#c9d8d2]'>Curations</p>
            <div className='mt-6 space-y-4'>
              {HandcraftedCurations.slice(0, 4).map((item) => (
                <Link
                  key={item.link}
                  to={`/search?category=${encodeURIComponent(item.link)}`}
                  className='flex items-center gap-4 rounded-[24px] bg-white/10 p-3 transition hover:bg-white/15'
                >
                  <img src={item.img} alt={item.title} className='h-16 w-16 rounded-full object-cover' />
                  <div>
                    <h2 className='font-s_bold'>{item.title}</h2>
                    <p className='text-sm text-[#d4e1dc]'>Open collection</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-s_bold'>Featured in store</h2>
            <Link to="/search" className='text-sm font-s_bold text-green-800'>
              See all
            </Link>
          </div>
          <div className='mt-6 grid gap-5 md:grid-cols-3'>
            {featuredStores.map((item) => (
              <Link key={item.title} to={item.link} className='overflow-hidden rounded-[28px] bg-white shadow-sm'>
                <img src={item.image} alt={item.title} className='h-52 w-full object-cover' />
                <div className='p-5'>
                  <h3 className='text-xl font-s_bold'>{item.title}</h3>
                  <p className='mt-2 text-sm text-[#5a6b65]'>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Store
