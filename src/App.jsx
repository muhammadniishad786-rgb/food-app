import { useEffect, useState } from 'react'
import Hero from './pages/Hero'
import Navbar from './component/NavBar'
import Category from './pages/Category'
import FoodCards from './component/FoodCard'
import Footer from './component/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { getMealBySeach } from './api/mealAPI'
import {CartContext} from './context/CartContext'

function App() {
  useEffect(() => {
    getMealBySeach("pizza")
  }, [])
  return (
    <CartContext>
    <BrowserRouter>
     <AppRoutes />
    </BrowserRouter>
    </CartContext>
  )
}

export default App
