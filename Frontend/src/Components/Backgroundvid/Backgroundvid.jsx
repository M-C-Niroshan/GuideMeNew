import React from 'react'
import './backgroundvid.css';


function Backgroundvid() {
  return (
    <div className="background-container">
      <video autoPlay muted loop id="background-video" className='vid'>
        <source src={`${process.env.PUBLIC_URL}/videoes/background.mp4`} type="video/mp4"/>
      </video>
      <div className="content">
        <h1 className='mainheading'>Welcome to <br/>the paradise of nature</h1>
        <p>Discover the Beauty, Beyond Imagination.</p>
      </div>
    </div>
  );
};

export default Backgroundvid