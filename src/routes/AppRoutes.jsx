import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Hero from '../pages/Hero'
import Category from '../pages/Category'
import FoodCards from '../component/FoodCard'
import Home from '../pages/Home'
import Register from '../pages/authentication/Register'
import Login from '../pages/authentication/Login'
import AuthLayout from '../layouts/AuthLayout'
import ProtectedRoute from './ProtectedRoute'
import Cart from '../pages/Cart'
import FoodCart from '../pages/FoodCart'
import PopularDishes from '../pages/PopularDishes'

function AppRoutes() {
  return (
    <Routes>

        {/* Main layout */}
        <Route element={<ProtectedRoute />} >
        <Route path='/' element={<MainLayout />}>
         <Route index element={<Home /> } />
         <Route path="catogery" element={<Category /> } />
         <Route path="foodcard" element={<FoodCards />} />
         <Route path='foodcart' element={<FoodCart />} />
         <Route path='pupulardishes' element={<PopularDishes />} />
         <Route path="cart" element={<Cart />} />
        </Route>
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
