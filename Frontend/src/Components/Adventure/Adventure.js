import React from 'react'
import './Adventure.css'
import image1 from '../Assets/Adventure.jpg';


const Adventure = () => {
  return (
   <div className='mainA'>
<div className='festivals-heading-container'>
          <div className="blackline-left"></div>
          <div className='csliderh1-container'>
                <h1 className='csliderh1'> So many things to do</h1>
          </div>
          <div className="blackline-right"></div>
      </div>
<div className='topicboxA'>

        
        <div className='backrectaA'>

        </div>
        <div className='topicA'>
        <p>Adventure Awaits</p>

        </div>
        </div>


    <div className="adventure-container">

        
      <div className="adventure-image">
        <img src={image1} alt="Adventure" />
      </div>
      <div className="adventure-content">
        
        <p>
        Sri Lanka's pristine beaches and untouched natural 
landscapes offer the perfect setting for relaxation 
and rejuvenationj<br/><br/>
a Beaches: Relax on the golden sands of 
Unawatuna, Mirissa, and Tangalle, some of the 
most beautiful beaches in the worldj
a Waterfalls: Witness the majestic beauty of 
waterfalls like Ravana Falls, Bambarakanda 
Falls, and Diyaluma Fallsj<br/><br/>
a Lagoons and Wetlands: Explore the serene 
waters of Pottuvil Lagoon and the wetlands of 
Muthurajawela
        </p>
      </div>
    </div>
    </div> 
  );
};

export default Adventure;