import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div style={{width:"100%", display:"flex",justifyContent:"space-around",height:"20px",border:"1px solid teal",backgroundColor:"lightgray"}}>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/contact'>Contact </NavLink>
        <NavLink to='/products'>Products </NavLink>
        <NavLink to='/users'>Users </NavLink>
        <NavLink to='/login'>Login </NavLink>
    </div>
  )
}

export default Navbar