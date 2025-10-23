import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <p>
        For Better Experience Please Contact <span className='highlight'>Sixlicious Co.</span>
      </p>

      <div className="contact-buttons">
        <a 
          href="https://wa.me/62895325358866" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-whatsapp"
        >
          Chat via WhatsApp
        </a>

        <a 
          href="https://www.instagram.com/sixlicious_cake?utm_source=qr&igsh=bGp2YXNsdmw5Z2Nl" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-instagram"
        >
          Follow on Instagram
        </a>

        <a 
          href="https://x.com/sixlicious_cake?t=kfMRmRMfDZY096BnBZh51A&s=09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-x"
        >
          Follow on X
        </a>
      </div>
    </div>
  )
}

export default Contact
