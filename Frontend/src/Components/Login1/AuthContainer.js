import React, { useState } from 'react';
import './AuthContainer.css';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import { useLocation } from "react-router-dom";

const AuthContainer = () => {
  
  const location = useLocation();
  const { booleanState } = location.state || {};
  const [active, setActive] = useState(booleanState);

  return (
    <div className='BigContainer'>
    <div className={`container ${active ? "active" : ""}`} id="container">
      
      <div className="form-container sign-in">
      {active ? <SignUpForm/>: <SignInForm/>}
      </div>
      
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={() => setActive(false)}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={() => setActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthContainer;
