import React, { useState, useRef, useEffect } from 'react';
import './navigation.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useUserContext } from '../pages/UserContext'; // Ensure the path is correct
import Popup from '../Popup/popup';
import { NavLink, useNavigate } from 'react-router-dom'; // Ensure this import

function Navigation() {
    const navRef = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [status, setstatus] = useState(false);
    const { userData } = useUserContext(); // Access user data from context
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const togglePopup = (value) => {
        setstatus(value);
        setShowPopup(!showPopup);
    }

    // Determine if user is logged in
    const isLoggedIn = userData && userData.profileImage;

    return (
        <header className='navheader'>
            <div className="logo-container">
                <NavLink to='/'><img src={`${process.env.PUBLIC_URL}/images/logovid.png`} className='navlogo' alt='logo' /></NavLink>
                <h1 className='navlogotext'>GuideMe</h1>
            </div>

            <nav ref={navRef}>
                <NavLink to='/PlanTrip' activeClassName='active'>Trip</NavLink>
                <NavLink to='/BookGuider' activeClassName='active'>Guider</NavLink>
                <NavLink to='/RentVehicle' activeClassName='active'>Vehicle</NavLink>
                <NavLink to='/chat' activeClassName='active'>Live Chat</NavLink>
                <NavLink to='/warranty' activeClassName='active'>Warranty</NavLink>

                {!isLoggedIn ? (
                    <>
                        <button className='login' onClick={() => togglePopup(0)}>Login</button>
                        <button className='signup' onClick={() => togglePopup(1)}>Sign Up</button>
                    </>
                ) : (
                    <div className='user-profile'>
                        <img src={userData.profileImage} alt='User Profile' className='user-icon' />
                    </div>
                )}

                <button onClick={showNavbar} className='ncbtn'>
                    <FaTimes />
                </button>
            </nav>
            <button className='nobtn' onClick={showNavbar}>
                <FaBars />
            </button>

            <Popup show={showPopup} onClose={togglePopup} status={status} />
        </header>
    );
}

export default Navigation;
