import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-filds">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account</p>
        <div className='login-signup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By Continue, i agree...</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup