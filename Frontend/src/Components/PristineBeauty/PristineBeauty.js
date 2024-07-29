import React from 'react'
import './PristineBeauty.css'
import image1 from '../Assets/PrestineBeauty.jpg';


const Adventure = () => {
  return (
   <div className='mainP'>

<div className='topicboxP'>
        
        <div className='backrectaP'>

        </div>
        <div className='topicP'>
        <p>Pristine Beauty</p>

        </div>
        </div>


    <div className="adventure-container">

        
      <div className="adventure-image">
        <img src={image1} alt="Adventure" />
      </div>
      <div className="adventure-content">
        
        <p>
        Sri Lanka is a playground for adventure enthusiasts. 
Whether you’re seeking thrilling water sports, 
hiking, or wildlife safaris, there’s something for 
everyone.
<br/><br/>

-Water Sports: The coastal town of Arugam Bay is 
renowned for surfing, while Bentota offers jet skiing, 
windsurfing,and banana boat rides.Hiking and -
Trekking: Conquer the peaks of Adam's Peak or 
explore the lush trails of Horton Plains National 
Park.Wildlife Safaris: Yala National Park and 
Wilpattu National Park provide opportunities to spot 
leopards, elephants, and a variety of bird species.
        </p>
      </div>
    </div>
    </div> 
  );
};

export default Adventure;