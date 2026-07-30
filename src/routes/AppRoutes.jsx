import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Hero from '../pages/Hero'
import Category from '../pages/Category'
import FoodCards from '../pages/FoodCard'
import Home from '../pages/Home'
import Register from '../pages/authentication/Register'
import Login from '../pages/authentication/Login'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout />}>
         <Route index element={<Home /> } />
         <Route path="category" element={<Category /> } />
         <Route path="foodcard" element={<FoodCards />} />
         <Route path="register" element={<Register />} />
         <Route path="login" element={<Login />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
