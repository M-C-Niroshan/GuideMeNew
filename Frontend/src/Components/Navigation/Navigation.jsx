import React, { useState, useRef, useEffect } from 'react';
import './navigation.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../pages/UserContext';
import Popup from '../Popup/popup';

function Navigation() {
    const { userData } = useUserContext();

    const navRef = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [status, setstatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userData) {
            const guiderIdRange = 2000;
            const renterIdRange = 1000;
            const travelerIdRange = 3000;

            // Determine role and navigate accordingly
            if (userData.guiderId && userData.guiderId >= guiderIdRange && userData.guiderId < 4000) {
                navigate("/Guiderdash");
            } else if (userData.renterId && userData.renterId >= renterIdRange && userData.renterId < guiderIdRange) {
                navigate("/Renterdash");
            }/*  else if (userData.traveller && userData.traveller >= travelerIdRange && userData.traveller < renterIdRange) {
                navigate("/");
            } */
        }
    }, [userData, navigate]);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const togglePopup = (value) => {
        setstatus(value);
        setShowPopup(!showPopup);
    }

    const handleOnClick = () => {
        navigate("/AuthConGuiderSignIn");
    }

    return (
        <header className='navheader'>
            <div className="logo-container">
                <NavLink to='/'><img src={`${process.env.PUBLIC_URL}/images/logovid.png`} className='navlogo' alt='logo' /></NavLink>
                <h1 className='navlogotext'>GuideMe</h1>
            </div>

            <nav ref={navRef}>
                <NavLink to='/' activeClassName='active'>Home</NavLink>
                <NavLink to='/PlanTrip' activeClassName='active'>Trip</NavLink>
                <NavLink to='/BookGuider' activeClassName='active'>Guider</NavLink>
                <NavLink to='/RentVehicle' activeClassName='active'>Vehicle</NavLink>

                {!userData ? (
                    <>
                        <button className='login' onClick={() => handleOnClick()}>Login</button>
                        <button className='signup' onClick={() => togglePopup(1)}>Sign Up</button>
                    </>
                ) : (
                    <>
                    <button className='login' >Welcome Traveller</button>

                    </>
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
