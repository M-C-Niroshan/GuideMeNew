import React, { useState } from 'react';
import './popup.css';
import { useNavigate } from 'react-router-dom';

function Popup({ show, onClose, status }) {
    const navigate = useNavigate(); // Initialize the navigate function

    if (!show) {
        return null;
    }

    console.log("Value passed:", status);

    const handleRoleSelection = (role) => {
        // Navigate to different paths based on the selected role
        switch (role) {
            case 'user':
                navigate('/AuthContainer'); // Update this path to where you want the user to navigate
                break;
            case 'guider':
                navigate('/AuthConGuider'); // Update this path to where you want the guider to navigate
                break;
            case 'renter':
                navigate('/AuthConRenter'); // Update this path to where you want the renter to navigate
                break;
            default:
                break;
        }

        onClose(); // Close the popup after navigation
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="cards-container">
                    <div className="card" onClick={() => handleRoleSelection('user')}>
                        <img src={`${process.env.PUBLIC_URL}/images/userrole.jpg`} alt='User role' className='post1' />
                        <h3><br/>Traveler</h3>
                    </div>
                    <div className="card" onClick={() => handleRoleSelection('guider')}>
                        <img src={`${process.env.PUBLIC_URL}/images/guiderrole.jpg`} alt='Guider role' className='post2' />
                        <h3><br/>Guider</h3>
                    </div>
                    <div className="card" onClick={() => handleRoleSelection('renter')}>
                        <img src={`${process.env.PUBLIC_URL}/images/renterrole.png`} alt='Renter role' className='post3' />
                        <h3><br/>Renter</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
