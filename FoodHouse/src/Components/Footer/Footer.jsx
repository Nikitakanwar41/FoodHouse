import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
         <div className="footer-content-left">
          <img className='logo' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quos illo nobis eveniet accusamus odit quo porro unde aliquid ex!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon}   alt="" />
            <img src={assets.twitter_icon}   alt="" />
            <img src={assets.linkedin_icon}   alt="" />
          </div>
         </div>
         <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
         </div>
         <div className="footer-content-right">
        <h2>Get in touch</h2>
        <ul>
            <li>+91 9175694793t</li>
            <li>foodhouse41@gmail.com</li>
        </ul>
    </div>
    </div>
      <hr />
    <p className='footer-copyright'>| &copy;  All Rights Reserved | 2005-FoodHouse |</p>
    <p className='footer-copyright'>Website is made with <span>&hearts;</span>  by - Nikita Kanwar</p>
    </div>
  )
}

export default Footer