import React, { useState } from 'react';
import './GuiderDetails.css'
import pc_icon from '../Assets/pc2.svg'
import DropdownGen from '../SpecialComponents/DropdownGen'

const GuiderDetails = () => {

    const [formStage, setFormStage] = useState('details');
    const [animation, setAnimation] = useState('');

    const handleContinue = () => {
        setAnimation('slide-out-left')
        setTimeout(() =>{
        setFormStage('amount');
        setAnimation('slide-in-right');
        },500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submit action, e.g., sending the data to a server
        console.log('Form submitted');
    }

  return (
    <div className='containerG'>
         <div className='icon-wrapperG'>
        <img src={pc_icon} alt='pc icon'/>
        </div>
        <div className= "headerG">
            <div className='text'>Tell us about you!</div>
        </div>
        {formStage === 'details' &&(
                <div className={`form-section ${animation}`}>
                <div className= "inputs">
                    <div className='input'>   
                        <div className='whiteContainerG1' id='txt1'>    
                            <div className='textboxG' id='txt1'>
                            <input type='text' placeholder='First name' id='txt1' className='textbG'/>
                            </div>
                        </div>
                    </div>
                    <div className='input' id='txt3'>   
                        <div className='whiteContainerG3' id='txt3'>    
                            <div className='textboxG' id='txt3'>
                            <input type='text' placeholder='Last name' id='txt1' className='textbG'/>
                            </div>
                        </div>
                    </div>
                    <div className='input' id='txt6'>   
                        <div className='whiteContainerG6' id='txt6'>    
                            <div className='textboxG' id='txt6'>
                            <input type='text' placeholder='NIC No' id='txt1' className='textbG'/>
                            </div>
                        </div>
                    </div>
                    <div className='input' id='txt2'>
                        <div className='whiteContainerG2'id='txt2'>
                            <div className='textbox'>
                            <input type='number' placeholder='Age' className='textbGage'/>
                            </div>
                        </div>
                    </div>
        </div>
        <DropdownGen/>
        <div className="submit-containerG">
            <button type='submit' className="submitG" onClick={handleContinue}>Continue</button>
        </div>
        </div>
        )}
        {formStage === 'amount' && (
            <div className={`form-section ${animation}`}>
                <div className='inputs'>
                    <div className='input'>
                        <div className='G7'>
                            <div className='textboxG7'>
                                <input type='phone' placeholder='Mobile No' id='mobile' className='textbG7' aria-label='mobile'/>
                            </div>
                        </div>
                    </div>
                    <div className='input'>
                        <div className='G8'>
                            <div className='textboxG8'>
                                <input type='number' placeholder='Price for 1 day (LKR)' id='amount' className='textbG8' aria-label='Amount'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='textboxGcont'id='txt4'>
                <div className="textarG">
                <textarea placeholder="Tell the world about you..." className="textboxGt" maxLength={230}/>
                </div>
                </div>
                <div className='submit-containerG'>
                    <button type='submit' className='submitG' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default GuiderDetails;
