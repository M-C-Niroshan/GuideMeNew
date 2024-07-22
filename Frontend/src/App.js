import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import GuiderDetails from './Components/Guider/GuiderDetails';
import RenterDetails from './Components/Vehicle/RenterDetails';
import VehicleDetails from './Components/Vehicle/VehicleDetails';

import VehicleRentHome from './Components/pages/VehicleRentHome';
import RentYourVehicleOld from './Components/pages/RentYourVehicleOld';
import BookYourGuiderOld from './Components/pages/BookYourGuiderOld';

import  PaymentMethod  from './Components/Payments/PaymentMethod';
import  PaymentSuccess  from './Components/Payments/PaymentSuccess';
import  PaymentFailed  from './Components/Payments/PaymentFailed';

import  Test  from './Components/pages/Test';

function App() {
  return (
    <div className="app">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/1" element={<Signup/>}></Route>
            <Route path="/2" element={<GuiderDetails/>}></Route>
            <Route path="/3" element={<RenterDetails/>}></Route>
            <Route path="/4" element={<VehicleDetails/>}></Route>
            <Route path="/5" element={<VehicleRentHome/>}></Route>
            <Route path="/6" element={<RentYourVehicleOld/>}></Route>
            <Route path="/7" element={<BookYourGuiderOld/>}></Route>
            <Route path="/8" element={<PaymentMethod/>}></Route>
            <Route path="/9" element={<PaymentSuccess/>}></Route>
            <Route path="/10" element={<PaymentFailed/>}></Route>
            <Route path="/Test" element={<Test/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
