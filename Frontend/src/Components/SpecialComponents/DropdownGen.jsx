import React, { useState } from 'react';
import './DropdownGen.css'; 

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('Male');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(`Selected: ${event.target.value}`);
    // Handle the selected value here (e.g., update the state, send to an API, etc.)
  };

  return (
    <div className="dropdown-containerGen">
      <label htmlFor="dropdown" className="label">Gender</label>
      <select id="dropdown" value={selectedValue} onChange={handleChange} className="dropdownGen">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default Dropdown;
