import React from 'react'
import Navbar from '../component/NavBar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout
