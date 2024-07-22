import React, { useState } from "react";

 import Footer from "../Footer";
 import Navigation from "../Navigation";

import { ReactComponent as Male } from "../images/Profile/male.svg";
import { ReactComponent as Female } from "../images/Profile/female.svg";

import "./BookYourGuiderOld.css";

function GuiderCard({ guider, isSelected, onSelect }) {
  return (
    <div
      className={`guider-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(guider)}
    >
      <div className="guider-image">{guider.image}</div>
      <div className="card-details">
        <div className="card-detail-name">{guider.name}</div>
        <div className="card-detail-age">Age: {guider.age}</div>
        <div className="card-detail-language">
          <div>Languages:</div>
          <div><div>{guider.language_1}</div><div>{guider.language_2}</div></div>
          
        </div>
        <div className="card-details-pay">{guider.price}/= Per Day</div>
      </div>
    </div>
  );
}

const guider = [
  {
    id: 1,
    name: "Mr.Kawindu Gimhana",
    age: 43,
    language_1: "English",
    language_2: " ",
    price: "LKR 3100",
    image: <Male className="profile-icon" />,
  },
  {
    id: 2,
    name: "Mr.Pahan Kavidu",
    age: 31,
    language_1: "English",
    language_2: "Tamil",
    price: "LKR 3000",
    image: <Male className="profile-icon" />,
  },
  {
    id: 3,
    name: "Ms.Sophia Mishel",
    age: 48,
    language_1: "English",
    language_2: "Sinhala",
    price: "LKR 2900",
    image: <Female className="profile-icon" />,
  },
  {
    id: 4,
    name: "Mr.Vinod Gamage",
    age: 23,
    language_1: "English",
    language_2: " ",
    price: "LKR 3500",
    image: <Male className="profile-icon" />,
  },
  {
    id: 5,
    name: "Ms.Emma Seki",
    age: 45,
    language_1: "Tamil",
    language_2: " ",
    price: "LKR 4000",
    image: <Female className="profile-icon" />,
  },
  {
    id: 6,
    name: "Mr.Lakshan Sampath",
    age: 33,
    language_1: "English",
    language_2: "Tamil",
    price: "LKR 17000",
    image: <Male className="profile-icon" />,
  },
];

function GuiderList() {
  const [selectedGuider, setselectedGuider] = useState(null);

  const handleSelect = (guider) => {
    if (selectedGuider?.id === guider.id) {
      setselectedGuider(null);
    } else {
      setselectedGuider(guider);
    }
  };

  return (
    <div className="vehicle-list">
      {guider.map((guider, index) => (
        <GuiderCard
          key={index}
          guider={guider}
          isSelected={selectedGuider?.id === guider.id}
          onSelect={handleSelect}
        />
      ))}
      <div className="footer-section">
        <button
          className={`continue-button ${selectedGuider ? "highlighted" : ""}`}
          disabled={!selectedGuider}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default function BookYourGuiderOld() {
  return (
    <div>
      {/* <div>
        <Navigation />
      </div> */}
      <div className="rent-your-header">
        <h4>Book Your Guider Today!</h4>
      </div>
      <div>
        <GuiderList />
      </div>
      {<div className="footergap">
        <Footer />
      </div> }
    </div>
  );
}
