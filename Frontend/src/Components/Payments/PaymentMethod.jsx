import React, { useState } from 'react';
import './PaymentMethod.css';
import visaIcon from '../Assets/visa.svg';
import mastercardIcon from '../Assets/mastercard.svg';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
  const [selected, setSelected] = useState(null);

  const Navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className='containerP'>
      <div className='icon-buttons'>
        <button
          className={`icon-wrapper1 ${selected === 'visa' ? 'selected' : ''}`}
          onClick={() => handleSelect('visa')}
        >
          <img src={visaIcon} alt='Visa icon' />
        </button>
        <div className='textor'>or</div>
        <button
          className={`icon-wrapper2 ${selected === 'mastercard' ? 'selected' : ''}`}
          onClick={() => handleSelect('mastercard')}
        >
          <img src={mastercardIcon} alt='MasterCard icon' />
        </button>
      </div>
      <div className="header">
        <div className='textP'>Payment Method</div>
      </div>
      <div className="inputs">
        <div className='input'>
          <p className='pt1'>Name on the card</p>
          <p className='pt2'>Card number</p>
          <p className='pt3'>Expiration</p>
          <p className='pt4'>CVC</p>
        </div>
        <div className='input'>
          <div className='whiteContainerP3'>
            <input type='text' placeholder='Name' className='textbP' />
          </div>
        </div>
        <div className='input'>
          <div className='whiteContainerP2'>
            <input type='text' placeholder='0000 0000 0000 0000' className='textbP' />
          </div>
        </div>
        <div className='input'>
          <div className='whiteContainerP4'>
            <input type='text' placeholder='MM' className='textbP' id='textbP2'/>
          </div>
          <div className='whiteContainerP5'>
            <input type='text' placeholder='YY' className='textbP'id='textbP3' />
          </div>
          <div className='whiteContainerP6'>
            <input type='text' placeholder='000' className='textbP' id='textbP4'/>
          </div>
        </div>
      </div>
      <div className="submit-container">
        <button type='submit' className="submit" onClick={()=> Navigate('/PaymentSuccess')}>Pay now</button>
      </div>
    </div>
  );
};

export default PaymentMethod;