import React, { useState } from 'react';

import Footer from "../Footer";
 import Navigation from "../Navigation";

import { ReactComponent as BicycleIcon } from '../images/Vehicle/bicycle.svg';
import { ReactComponent as BikeIcon } from '../images/Vehicle/bike.svg';
import { ReactComponent as TukIcon } from '../images/Vehicle/tuk.svg';
import { ReactComponent as FlexIcon } from '../images/Vehicle/flex.svg';
import { ReactComponent as CarIcon } from '../images/Vehicle/car.svg';
import { ReactComponent as VanIcon } from '../images/Vehicle/van.svg';
import { ReactComponent as PersonIcon } from "../images/Vehicle/1 person.svg";
import { ReactComponent as PeopleIcon } from "../images/Vehicle/2 people.svg";

import './RentYourVehicleOld.css';



function VehicleCard({ vehicle, isSelected, onSelect }) {
  const renderPersonIcon = () => {
    if (vehicle.capacity === 1) {
      return <PersonIcon className="person-icon-1" />;
    } else {
      return <PeopleIcon className="person-icon-2" />;
    }
  };

  return (
    <div
      className={`vehicle-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(vehicle)}
    >
      <div className="vehicle-image">{vehicle.image}</div>
      <div className="card-details">
        <div>
          <span className="card-detail-A">{vehicle.name}</span>
          <span className="card-detail-B">{vehicle.capacity}</span>
          <span className="card-detail-C">{renderPersonIcon()}</span>
        </div>
        <p className="card-details-2">{vehicle.price} Per Day</p>
      </div>
    </div>
  );
}

const vehicles = [
  {
    name: 'Bicycle',
    capacity: 1,
    price: 'LKR 1000',
    image: <BicycleIcon className="vehicle-icon" />,
  },
  {
    name: 'Bike',
    capacity: 2,
    price: 'LKR 3000',
    image: <BikeIcon className="vehicle-icon" />,
  },
  {
    name: 'Tuk',
    capacity: 3,
    price: 'LKR 5000',
    image: <TukIcon className="vehicle-icon" />,
  },
  {
    name: 'Flex',
    capacity: 3,
    price: 'LKR 7000',
    image: <FlexIcon className="vehicle-icon" />,
  },
  {
    name: 'Car',
    capacity: 4,
    price: 'LKR 10000',
    image: <CarIcon className="vehicle-icon" />,
  },
  {
    name: 'Van',
    capacity: 10,
    price: 'LKR 17000',
    image: <VanIcon className="vehicle-icon" />,
  },
];

function VehicleList() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [rentalDays, setRentalDays] = useState(1);

  const handleSelect = (vehicle) => {
    if (selectedVehicle?.name === vehicle.name) {
      setSelectedVehicle(null);
    } else {
      setSelectedVehicle(vehicle);
    }
  };

  return (
    <div className="vehicle-list">
      {vehicles.map((vehicle, index) => (
        <VehicleCard
          key={index}
          vehicle={vehicle}
          isSelected={selectedVehicle?.name === vehicle.name}
          onSelect={handleSelect}
          rentalDays={rentalDays}
        />
      ))}
      <div className="footer-section">
        <div className="number-of-days-input">
          <label htmlFor="rental-days">No of Days:&nbsp;</label>
          <input
            type="number"
            id="rental-days"
            value={rentalDays}
            onChange={(e) => setRentalDays(parseInt(e.target.value))}
            min="1"
            max="30"
          />
        </div>
        <button
          className={`continue-button ${selectedVehicle ? "highlighted" : ""}`}
          disabled={!selectedVehicle}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default function RentYourVehicleOld() {
  return (
    <div>
      { <div>
        <Navigation />
      </div> }
      <div className='rent-your-header'>
        <h4>Rent Your Vehicle Today!</h4>
      </div>
      <div>
        <VehicleList />
      </div>
      { <div className='footergap'>
        <Footer />
      </div> }
    </div>
  );
}
