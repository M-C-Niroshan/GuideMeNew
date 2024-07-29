import React from 'react'
import './ThrillsandChills.css'
import image1 from '../Assets/Thrills.png';


const Adventure = () => {
  return (
   <div className='mainT'>

<div className='topicboxT'>
        
        <div className='backrectaT'>

        </div>
        <div className='topicT'>
        <p>Thrills and Chills</p>

        </div>
        </div>


    <div className="adventure-container">

        
      <div className="adventure-image">
        <img src={image1} alt="Adventure" />
      </div>
      <div className="adventure-content">
        
        <p>
        For those who crave heart-pounding 
excitement, Sri Lanka doesn’t disappoint.

<br/>
<br/>
White Water Rafting: Navigate the rapids 
of the Kelani River in Kitulgala, a perfect 
spot for both beginners and seasoned 
rafters.


<br/>
Paragliding: Soar over the stunning 
landscapes of Ella, enjoying panoramic 
views of tea plantations and valleys.
<br/> 
Rock Climbing: Scale the cliffs of 
Bambarakanda or Ella, where challenging 
routes await the bravest climbers
<br/></p>
      </div>
    </div>
    </div> 
  );
};

export default Adventure;