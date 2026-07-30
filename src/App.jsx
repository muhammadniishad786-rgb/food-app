import { useState } from 'react'
import Hero from './pages/Hero'
import Navbar from './component/NavBar'
import Category from './pages/Category'
import FoodCards from './pages/FoodCard'
import Footer from './component/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Category />
    <FoodCards />
    <Footer />
    </>
  )
}

export default App
