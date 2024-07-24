import React, { useState } from 'react';
import './DropdownGen.css'; 

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('Car');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(`Selected: ${event.target.value}`);
    // Handle the selected value here (e.g., update the state, send to an API, etc.)
  };

  return (
    <div className="dropdown-containerGen">
      <label htmlFor="dropdown" className="label">Vehicle</label>
      <select id="dropdown" value={selectedValue} onChange={handleChange} className="dropdownGen">
        <option value="Bicycle">Bicycle</option>
        <option value="Motorcycle">Motorcycle</option>
        <option value="Tuk">Tuk</option>
        <option value="Flex">Flex</option>
        <option value="Car">Car</option>
        <option value="Van">Van</option>
      </select>
    </div>
  );
};

export default Dropdown;
