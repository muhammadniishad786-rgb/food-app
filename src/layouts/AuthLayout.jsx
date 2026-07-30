import React from 'react'
import Navbar from '../component/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

function AuthLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
    
  )
}

export default AuthLayout
