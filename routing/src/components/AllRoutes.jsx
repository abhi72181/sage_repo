import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Users from './Users'
import UserDetails from './UserDetails'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/users/:id" element={<UserDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes