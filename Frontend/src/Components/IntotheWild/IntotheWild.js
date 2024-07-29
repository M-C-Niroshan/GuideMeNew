import React from 'react'
import './IntotheWild.css'
import image1 from '../Assets/Wild.jpg';


const Adventure = () => {
  return (
   <div className='mainI'>

<div className='topicboxI'>
        
        <div className='backrectaI'>

        </div>
        <div className='topicI'>
        <p>Into the Wild</p>

        </div>
        </div>


    <div className="adventure-container">

    <div className="adventure-content">
        
        <p>
        Experience the untamed beauty of Sri Lanka's 
wilderness. The island is home to a diverse range of 
flora and fauna, making it a hotspot for nature lovers.
<br/><br/>


Rainforests: Sinharaja Forest Reserve, a UNESCO 
World Heritage site, offers guided tours through 
dense tropical rainforests teeming with wildlife.
<br/><br/>
Marine Life: Embark on a whale watching tour in 
Mirissa or go diving in Hikkaduwa to explore vibrant 
coral reefs.
<br/><br/>

Bird Watching: Visit the Kumana National Park, a bird 
watcher’s paradise with over 200 species of birds.
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