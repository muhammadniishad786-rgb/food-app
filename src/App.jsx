import { useState } from 'react'
import Hero from './pages/Hero'
import Navbar from './component/NavBar'
import Category from './pages/Category'
import FoodCards from './pages/FoodCard'
import Footer from './component/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
     <AppRoutes />
    </BrowserRouter>
  )
}

export default App
