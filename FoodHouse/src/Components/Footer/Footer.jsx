import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
         <div className="footer-content-left">
          <img className='logo' src={assets.logo} alt="" />
          <p>FoodHouse is the one of the best food company that deliver good food all over world and the fastest delivery. it is a very large company famous for it's good quality food.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon}   alt="" />
            <img src={assets.twitter_icon}   alt="" />
            <img src={assets.linkedin_icon}   alt="" />
          </div>
         </div>
         <div className="footer-content-center">
        <h2>FoodHouse</h2>
        <ul>
            <a href='/'><li>Home</li></a>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
         </div>
         <div className="footer-content-right">
        <h2>Contact here</h2>
        <ul>
            <li>+91 98665884395</li>
            <li>foodhouse41@gmail.com</li>
        </ul>
    </div>
    </div>
      <hr />
    <p className='footer-copyright'>| &copy;  All Rights Reserved | 2005-FoodHouse |</p>
    <p className='footer-copyright'>Website is made by - Nikita Kanwar</p>
    </div>
  )
}

export default Footer