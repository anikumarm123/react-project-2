import React from 'react'
import logo from './images/dark-logo.png';
import "./web.css"
const Nav = () => {
  return (
    <div className='navflx'>
        <div className='logo'><img src={logo}></img></div>
        <div className='navbar'>
            <span>Home</span>
            <span>About</span>
            <span>FAQ</span>
            <span>Listed In</span>
            <span>Condacts</span>
            <button id="login">Login</button>
            <button id='reg'>Register</button>
        </div>
    </div>
  )
}

export default Nav