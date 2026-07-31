import React from 'react'
import Category from './Category'
import FoodCards from '../component/FoodCard'
import Hero from './Hero'
import FoodCart from './FoodCart'
import PopularDishes from './PopularDishes'

function Home() {
  return (
    <>
    <Hero />
    <Category />
    {/* <FoodCard /> */}
    {/* <FoodCart /> */}
    <PopularDishes />
    </>
  )
}

export default Home
