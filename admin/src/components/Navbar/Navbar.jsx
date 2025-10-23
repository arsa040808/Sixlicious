import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img className='logo' src={assets.logo} alt="logo" />
            <h1>Admin Panel</h1>
        </div>
    </div>
  )
}

export default Navbar
