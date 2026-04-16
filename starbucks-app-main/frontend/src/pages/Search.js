import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BaristaRecommends, HandcraftedCurations } from '../data'
import { useCart } from '../context/CartContext'

const Search = () => {
  const { addItem } = useCart();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || '';
  const activeCategory = HandcraftedCurations.find((item) => item.link === selectedCategory);
  const visibleProducts = activeCategory
    ? BaristaRecommends.filter((item) => item.category === activeCategory.link)
    : BaristaRecommends;

  return (
    <section className='min-h-[420px] bg-[#f9f9f4] px-4 py-10 text-[#1e3932] sm:px-10 md:px-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col gap-3'>
          <p className='text-sm uppercase tracking-[0.2em] text-[#5a6b65]'>Handcrafted Curations</p>
          <h1 className='text-3xl font-s_bold'>
            {activeCategory ? activeCategory.title : 'Browse our featured categories'}
          </h1>
          <p className='max-w-2xl text-sm text-[#5a6b65] sm:text-base'>
            Select a curation to explore the menu section. The homepage cards now route here instead of acting like inactive links.
          </p>
        </div>

        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {HandcraftedCurations.map((item) => {
            const isActive = item.link === selectedCategory;

            return (
              <Link
                key={item.link}
                to={`/search?category=${encodeURIComponent(item.link)}`}
                className={`rounded-[28px] border p-5 transition-all ${
                  isActive
                    ? 'border-green-800 bg-[#e9f4ee] shadow-sm'
                    : 'border-[#d8d2c8] bg-white hover:border-green-700'
                }`}
              >
                <div className='flex items-center gap-4'>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='h-20 w-20 rounded-full object-cover'
                  />
                  <div>
                    <h2 className='text-lg font-s_bold'>{item.title}</h2>
                    <p className='mt-1 text-sm text-[#5a6b65]'>
                      {isActive ? 'Currently selected' : 'Open this category'}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className='mt-10 rounded-[32px] bg-white p-6 shadow-sm'>
          {activeCategory ? (
            <>
              <p className='text-sm uppercase tracking-[0.2em] text-[#5a6b65]'>Selected category</p>
              <div className='mt-4 flex flex-col gap-5 sm:flex-row sm:items-center'>
                <img
                  src={activeCategory.img}
                  alt={activeCategory.title}
                  className='h-28 w-28 rounded-full object-cover'
                />
                <div>
                  <h2 className='text-2xl font-s_bold'>{activeCategory.title}</h2>
                  <p className='mt-2 max-w-2xl text-sm text-[#5a6b65] sm:text-base'>
                    This category is now wired up and reachable from the dashboard. You can keep building this page into a full product listing for {activeCategory.title}.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className='text-2xl font-s_bold'>Choose a category</h2>
              <p className='mt-2 text-sm text-[#5a6b65] sm:text-base'>
                Pick one of the curation cards above to filter the page.
              </p>
            </>
          )}
        </div>

        <div className='mt-10'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-s_bold'>
              {activeCategory ? `${activeCategory.title} menu` : 'Popular menu'}
            </h2>
            <p className='text-sm text-[#5a6b65]'>
              {visibleProducts.length} item{visibleProducts.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className='mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {visibleProducts.map((item) => (
              <article key={item.id} className='overflow-hidden rounded-[28px] bg-white shadow-sm'>
                <img src={item.img} alt={item.title} className='h-56 w-full object-cover' />
                <div className='p-5'>
                  <h3 className='text-xl font-s_bold'>{item.title}</h3>
                  <p className='mt-2 text-sm text-[#5a6b65]'>
                    {item.gram} ML | {item.kcal} kcal
                  </p>
                  <div className='mt-4 flex items-center justify-between'>
                    <p className='font-s_bold'>Rs. {item.price}.{item.paise}</p>
                    <button
                      className='rounded-full bg-green-800 px-4 py-2 text-sm text-white'
                      onClick={() => addItem(item)}
                      type="button"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
