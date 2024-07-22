import React from 'react'
import './navigation.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

function Navigation() {
    const navRef =useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header className='navheader'>
      <div className="logo-container">
      <img src={`${process.env.PUBLIC_URL}/images/logovid.png`} className='navlogo' alt='logo'></img>
      <h1 className='navlogotext'>GuideMe</h1>
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