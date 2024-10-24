import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents">
        <h2>Welcome to FoodHouse <br /> order your food now</h2>
        <p>The greatest  foodHouse is here. We provide the best food for you and the fastest delivery. so order your food now don't be late.</p>
        <a  href='#explore-menu' ><button>View Menu</button></a>
       </div>
    </div>
  )
}

export default Header