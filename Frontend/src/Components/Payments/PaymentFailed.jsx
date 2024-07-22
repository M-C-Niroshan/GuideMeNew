import React, { useState } from 'react';
import './PaymentFailed.css';
import paymentFIcon from '../Assets/paymentF.svg';

const PaymentFailed = () => {

  return (
    <div className='containerPF'>
      <div className='icon-buttons'>
          <img src={paymentFIcon} alt='Payment Failed icon' className='paymentF'/>
      <div className="header">
        <div className='textPF'>Payment Failed!</div>
      </div>
      <div className="inputs">
        <div className='PaymentInfo'>
          <p className='ErrMsg'>Something went wrong.. please try again.</p>
        </div>
        </div>
      </div>
      <div className="submit-container">
        <button type='submit' className="submitFail">Try again</button>
      </div>
    </div>
  );
};

export default PaymentFailed;
