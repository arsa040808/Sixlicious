import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favorite Cake Here</h2>
        <p>
            Welcome to Sixlicious, where every cake is crafted with love and passion. From the rich taste of chocolate, the freshness of strawberry, to the colorful layers of rainbow delight, each bite brings happiness to your special moments. Whether it’s a birthday, celebration, or just a sweet craving, Sixlicious is here to make your day more delightful.
        </p>
        <button>View More</button>
      </div>
    </div>
  )
}

export default Header
