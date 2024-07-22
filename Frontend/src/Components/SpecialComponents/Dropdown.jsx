import React, { useState } from 'react';
import './Dropdown.css'; 

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('User');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(`Selected: ${event.target.value}`);
    // Handle the selected value here (e.g., update the state, send to an API, etc.)
  };

  return (
    <div className="dropdown-containerS">
      <label htmlFor="dropdown" className="label">Sign-in as</label>
      <select id="dropdown" value={selectedValue} onChange={handleChange} className="dropdown">
        <option value="User">User</option>
        <option value="Guider">Guider</option>
        <option value="Renter">Renter</option>
      </select>
    </div>
  );
};

export default Dropdown;
