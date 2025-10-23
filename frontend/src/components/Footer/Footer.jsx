import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className="logo">
            <a href=''><img src={assets.logo} alt="logo" /></a>
            </div>
            <p>Sixlicious brings you delicious treats made with love and passion.<br></br>Taste the sweetness in every bite!
            </p>
              <div className="footer-social-icons">
                <a href="https://x.com/sixlicious_cake?t=kfMRmRMfDZY096BnBZh51A&s=09" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="twitter-icon" />
                </a>
                <a href="https://www.instagram.com/sixlicious_cake?utm_source=qr&igsh=bGp2YXNsdmw5Z2Nl" target="_blank" 
                  rel="noopener noreferrer">
                  <img src={assets.instagram_icon} alt="instagram-icon" />
                </a>
              </div>
            </div>
                  

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <a href="#home"><li>Home</li></a>
              <a href="#explore-menu"><li>Menu</li></a>
              <a href="#contact"><li>Social Media</li></a>
              <a href="/terms"><li>Terms & Conditions</li></a>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+62895325358866</li>
                <li>sixlicious@gmail.com</li>
                <li>Jl. Wahidin Sudiro Husodo No.22, Klaten</li>
            </ul>
        </div>
      </div>
    <hr />
    <p className="footer-copyright-text">
        @ Copyright 2025 | Sixlicious | All rights reserved.
    </p>


    </div>
  )
}

export default Footer
