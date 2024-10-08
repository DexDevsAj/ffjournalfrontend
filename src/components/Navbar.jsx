import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href='/' className='logo'>Logo</a>

      <nav className='navbar'>
        <a href="/">Home</a>
        <a href="/flies">Flies</a>

      </nav>
    </header>
  )
}

export default Navbar