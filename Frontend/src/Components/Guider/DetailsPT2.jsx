import React from 'react';
import './DetailsPT2.css'
import pc_icon from '../Assets/pc2.svg'
import DropdownGen from '../SpecialComponents/DropdownGen'
export const DetailsPT2 = () => {
  return (
    <div className='containerG'>
        <div className='icon-wrapperG'>
        <img src={pc_icon} alt='pc icon'/>
        </div>
        <div className= "headerG">
            <div className='text'>Tell us about you!</div>
        </div>
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
                    <input type='text' placeholder='ID No' id='txt1' className='textbG'/>
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
            <div className='textboxGcont'id='txt4'>
                <div className="textarG">
                <textarea placeholder="Tell the world about you..." className="textboxGt" maxLength={230}/>
                </div>
            </div>
        </div>
        <DropdownGen/>
        <div className="submit-containerG">
            <button type='submit' className="submitG">Continue</button>
        </div>
        </div>
  )
}
