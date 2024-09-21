import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/myntra_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-logo">
         <img src={footer_logo} alt="Error"/>
         <p>Myntra</p>
       </div>
       <ul className="footer-links">
         <li>Company</li>
         <li>Products</li>
         <li>Offices</li>
         <li>About</li>
         <li>Contact</li>
       </ul>
       <div className="footer-social-icons">
         <div className="footer-icons-container">
            <img src={instagram_icon} alt="Error"/>
         </div>
         <div className="footer-icons-container">
            <img src={pintester_icon} alt="Error"/>
         </div>
         <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="Error"/>
         </div>
       </div>
       <div className="footer-copyright">
         <hr/>
        <p>Copyright @ 2024 - All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer