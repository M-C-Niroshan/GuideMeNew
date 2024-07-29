import React from 'react'
import './Heritage.css'
import image1 from '../Assets/Heritage.jpg';


const Adventure = () => {
  return (
   <div className='mainH'>

<div className='topicboxH'>
        
        <div className='backrectaH'>

        </div>
        <div className='topicH'>
        <p>Heritage Unveiled</p>

        </div>
        </div>


    <div className="adventure-container">

    <div className="adventure-content">
        
        <p>
        cultural heritage, reflected in its ancient cities, 
temples, and colonial architecture.


Ancient Cities: Wander through the ruins of 
Anuradhapura and Polonnaruwa, once thriving 
capitals of ancient kingdoms.
<br/><br/>
Sacred Temples: Visit the Temple of the Tooth in 
Kandy, a revered site housing a relic of the 
Buddha’s tooth.
<br/><br/>
Colonial Architecture: Stroll through the streets of 
Galle Fort, a UNESCO World Heritage site with 
well-preserved Dutch colonial buildings
        </p>
      </div>
      <div className="adventure-image">
        <img src={image1} alt="Adventure" />
      </div>
      
    </div>
    </div> 
  );
};

export default Adventure;