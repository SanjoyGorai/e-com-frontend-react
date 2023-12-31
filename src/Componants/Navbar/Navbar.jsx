import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setmenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setmenu('shop') }}> <Link to='/' style={{ textDecoration: 'none' }} >Shop</Link> {menu === "shop" ? <hr /> : <></>} </li >
                <li onClick={() => { setmenu('mens') }}><Link to='/' style={{ textDecoration: 'none' }}>Men</Link>{menu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu('womens') }}><Link to='/' style={{ textDecoration: 'none' }}>Woman</Link>{menu === 'womens' ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu('kids') }}><Link to='/' style={{ textDecoration: 'none' }}>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/login'><img src={card_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
