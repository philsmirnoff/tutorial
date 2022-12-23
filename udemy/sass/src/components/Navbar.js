import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/contact">Contact</a>
    </div>
    </div>
  )
}

export default Navbar
