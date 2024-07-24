import React, { useState } from 'react';
import './popup.css';
import AuthContainer from '../Login1/AuthContainer'; 
import AuthConGuider from '../Login1/AuthConGuider';
/* import AuthConRenter from './AuthConRenter'; */

function Popup({ show, onClose }) {
    const [selectedRole, setSelectedRole] = useState(null);

    if (!show) {
        return null;
    }

    const renderSelectedComponent = () => {
        switch (selectedRole) {
            case 'user':
                return <AuthContainer />;
            case 'guider':
                return <AuthConGuider />;
/*             case 'renter':
                return <AuthConRenter />; */
            default:
                return null;
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                {!selectedRole ? (
                    <div className="cards-container">
                        <div className="card" onClick={() => setSelectedRole('user')}>
                            <img src={`${process.env.PUBLIC_URL}/images/userrole.jpg`} alt='image' className='post1'/>
                            <h3><br/>User</h3>
                        </div>
                        <div className="card" onClick={() => setSelectedRole('guider')}>
                            <img src={`${process.env.PUBLIC_URL}/images/guiderrole.jpg`} alt='image' className='post2'/>
                            <h3><br/>Guider</h3>
                        </div>
                        <div className="card" /* onClick={() => setSelectedRole('renter')} */>
                            <img src={`${process.env.PUBLIC_URL}/images/renterrole.png`} alt='image' className='post3'/>
                            <h3><br/>Renter</h3>
                        </div>
                    </div>
                ) : (
                    <div className="selected-component">
                        {renderSelectedComponent()}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Popup;