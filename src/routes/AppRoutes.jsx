import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Hero from '../pages/Hero'
import Category from '../pages/Category'
import FoodCards from '../pages/FoodCard'
import Home from '../pages/Home'
import Register from '../pages/authentication/Register'
import Login from '../pages/authentication/Login'
import AuthLayout from '../layouts/AuthLayout'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>

        {/* Main layout */}
        <Route element={<ProtectedRoute />} >
        <Route path='/' element={<MainLayout />}>
         <Route index element={<Home /> } />
         <Route path="category" element={<Category /> } />
         <Route path="foodcard" element={<FoodCards />} />
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
