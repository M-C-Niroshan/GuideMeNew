import React from 'react'
import './navigation.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Navigation() {
    const navRef =useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const Navigate = useNavigate();

  return (
    <header className='navheader'>
      <div className="logo-container">
      <img src={`${process.env.PUBLIC_URL}/images/logovid.png`} className='navlogo' alt='logo'></img>
      <h1 className='navlogotext'>GuideMe</h1>
    </div>

    <nav ref={navRef}>
        <Link to='/5'>Rent a Vehicle</Link>
        <a href='#'>Shop</a>
        <a href='#'>RSS Feed</a>
        <a href='#'>Live Chat</a>
        <a href='#'>Wararanty</a>

        <button className='login' onClick={()=> Navigate("/0")}>Login</button>
        <button className='signup' onClick={()=> Navigate("/1")}>Sign Up</button>

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