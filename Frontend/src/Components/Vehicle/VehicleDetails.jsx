import React, { useState } from 'react';
import './VehicleDetails.css'
import pc_icon from '../Assets/pc2.svg'
import DropdownGen from '../SpecialComponents/DropdownGen'

const VehicleDetails = () => {

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
    <div className='containerGV'>
         <div className='icon-wrapperGV'>
        <img src={pc_icon} alt='pc icon'/>
        </div>
        <div className= "headerG">
            <div className='text'>Your Vehicle Details</div>
        </div>
        {formStage === 'details' &&(
                <div className={`form-section ${animation}`}>
                <div className= "inputs">
                    <div className='input'>   
                        <div className='whiteContainerGV1' id='txt1'>    
                            <div className='textboxGV' id='txt1'>
                            <input type='text' placeholder='First name' id='txt1' className='textbG'/>
                            </div>
                        </div>
                    </div>
                    <div className='input' id='txt3'>   
                        <div className='whiteContainerGV3' id='txt3'>    
                            <div className='textboxGV' id='txt3'>
                            <input type='text' placeholder='Last name' id='txt1' className='textbG'/>
                            </div>
                        </div>
                    </div>
                    <div className='input' id='txt6'>   
                        <div className='whiteContainerGV6' id='txt6'>    
                            <div className='textboxGV' id='txt6'>
                            <input type='text' placeholder='NIC No' id='txt1' className='textbG'/>
                            </div>
                        </div>
                    </div>
                    <div className='input' id='txt2'>
                        <div className='whiteContainerGV2'id='txt2'>
                            <div className='textbox'>
                            <input type='number' placeholder='Age' className='textbGageV'/>
                            </div>
                        </div>
                    </div>
        </div>
        <DropdownGen/>
        <div className="submit-containerGV">
            <button type='submit' className="submitG" onClick={handleContinue}>Continue</button>
        </div>
        </div>
        )}
        {formStage === 'amount' && (
            <div className={`form-section ${animation}`}>
                <div className='inputs'>
                    <div className='input'>
                        <div className='GV7'>
                            <div className='textboxGV7'>
                                <input type='phone' placeholder='Mobile No' id='mobile' className='textbGV7' aria-label='mobile'/>
                            </div>
                        </div>
                    </div>
                    <div className='input'>
                        <div className='GV8'>
                            <div className='textboxGV8'>
                                <input type='text' placeholder='Address' id='address' className='textbGV8' aria-label='Address'/>
                            </div>
                        </div>
                    </div>
                    <div className='input'>
                        <div className='GV9'>
                            <div className='textboxGV9'>
                                <input type='text' placeholder='Service Area' id='area' className='textbGV9' aria-label='Service area'/>
                            </div>
                        </div>
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

export default VehicleDetails;