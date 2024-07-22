import React from 'react'
import './navigation.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import logo from './images/logo.png';

function Navigation() {
    const navRef =useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
      <div className="logo-container">
      <img src={logo} className='navlogo'></img>
      <h1 className='logotext'>GuideMe</h1>
    </div>

    <nav ref={navRef}>
        <a href='#'>Home</a>
        <a href='#'>Shop</a>
        <a href='#'>RSS Feed</a>
        <a href='#'>Live Chat</a>
        <a href='#'>Wararanty</a>

        <button className='login'>Login</button>
        <button className='signup'>Sign Up</button>

        <button onClick={showNavbar} className='ncbtn'>
            <FaTimes/>
         </button>
    </nav> 
    <button className='nobtn' onClick={showNavbar}>
        <FaBars/>
    </button>
    </header>
  )
}

export default Navigation