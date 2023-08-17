import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

const HomePage = React.lazy(() => import('@/pages/Home'))

const AppRoute = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
    </Routes>
  )
}

export default AppRoute
