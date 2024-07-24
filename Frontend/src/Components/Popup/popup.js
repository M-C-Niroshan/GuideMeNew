import React from 'react';
import './popup.css';

function Popup({ show, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="cards-container">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/userrole.jpg`} alt='image' className='post1'/>
                        <h3><br/>User</h3>
                    </div>
                    <div className="card">
                    <img src={`${process.env.PUBLIC_URL}/images/guiderrole.jpg`} alt='image' className='post1'/>
                    <h3><br/>Guider</h3>
                    </div>
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/renterrole.png`} alt='image' className='post1'/>
                        <h3><br/>Renter</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;