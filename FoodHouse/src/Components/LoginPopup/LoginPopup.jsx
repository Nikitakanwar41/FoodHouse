import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
   <form className='login-popup-container'>
    <div className="login-popup-title">
        <h2>{currentState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
      {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
        <input type="email" placeholder='Youe email' required />
        <input type="password" placeholder='password' required />

    </div>
    <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
    <div className="login-popup-condition">
      <input type="checkbox" required />
      <p>By contunuin agrreto privacy policy</p>
    </div>
    {currentState==="Login"
    ? <p>create a new account? <span onClick={()=>setCurrentState("Sign Up")} >click here</span></p>
    : <p>Already have an account? <span onClick={()=>setCurrentState("Login")} >login here</span></p>
    }
   
   
   </form>
    </div>
  )
}

export default LoginPopup