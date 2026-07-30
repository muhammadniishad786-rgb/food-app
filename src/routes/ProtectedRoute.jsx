import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const token = localStorage.getItem("token")
    console.log(token)

    if(!token){
        return <Navigate to="/login" replace />
    }
  return <Outlet />
}

export default ProtectedRoute
