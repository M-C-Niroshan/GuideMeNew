import React, { useState } from 'react';
import './PaymentSuccess.css';
import paymentSIcon from '../Assets/paymentS.svg';

const PaymentSuccess = () => {

  return (
    <div className='containerPS'>
      <div className='icon-buttons'>
          <img src={paymentSIcon} alt='Payment Successful icon' className='paymentS'/>
      <div className="header">
        <div className='textPS'>Payment Successful!</div>
      </div>
      <div className="inputs">
        <div className='PaymentInfo'>
          <p className='ptSAmount'>Amount (LKR) :</p>
          <p className='ptSAmountD'>Test</p>
          <p className='ptSPaid'>Paid by :</p>
          <p className='ptSPaidD'>Test</p>
        </div>
        </div>
      </div>
      <div className="submit-container">
        <button type='submit' className="submit">Home</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
