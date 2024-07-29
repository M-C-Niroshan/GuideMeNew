import React from 'react'
import './tlanka.css';

function Tlanka() {
  return (
    <div className="travel-lanka-container">

      <div className="image-part">
        <img src={`${process.env.PUBLIC_URL}/images/post1.png`} alt='image' className='post1'/>
      </div>

      <div className="text-part">
        <div className="red-line"></div>
        <h1>Travel lanka</h1>
        <div className="ash-line"></div>
        <div className="tlankatext">
          <p className='tlankap'>Discover Sri Lanka: a land of ancient ruins, lush tea plantations, and pristine
            beaches. From the wild wonders of Udawalawe National Park to the
            colonial charm of Galle Fort, every moment promises adventure and
            enchantment. Indulge in the tantalizing flavors of Sri Lankan cuisine and
            immerse yourself in the vibrant culture of this island paradise. Your journey awaits.</p>
        </div>
        <button className='text-part-signup'></button>
      </div>

    </div>
  )
}

export default Tlanka