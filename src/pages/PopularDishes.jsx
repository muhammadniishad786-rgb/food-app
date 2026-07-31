import React from 'react'
import FoodCart from './FoodCart'
import FoodCards from '../component/FoodCard'

function PopularDishes() {
  return (
    <div>
      <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Popular items
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-800">
            Popular Items
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Hand-picked meals prepared with fresh ingredients and delivered hot
            to your doorstep.
          </p>
        </div>

        <FoodCards limit={3} />
      </div>
    </main>
    </div>
  )
}

export default PopularDishes
