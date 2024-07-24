import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import GuiderDetails from './Components/Guider/GuiderDetails';
import RenterDetails from './Components/Vehicle/RenterDetails';
/* import VehicleDetails from './Components/Vehicle/VehicleDetails'; */

import VehicleRentHome from './Components/pages/RentVehicle/VehicleRentHome';
import BookGuiderHome from './Components/pages/Bookguider/BookGuiderHome';

import  PaymentMethod  from './Components/Payments/PaymentMethod';
import  PaymentSuccess  from './Components/Payments/PaymentSuccess';
import  PaymentFailed  from './Components/Payments/PaymentFailed';

import  Test  from './Components/pages/Test';
import VehicleDetails from "./Components/pages/RentVehicle/VehicleDetails";

import Home from './Components/Home/Home';


function App() {
  return (
    <div className="app">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route> */
            <Route path="/0" element={<Login/>}></Route>
            <Route path="/1" element={<Signup/>}></Route>
            <Route path="/2" element={<GuiderDetails/>}></Route>
            <Route path="/3" element={<RenterDetails/>}></Route>

            <Route path="/RentVehicle" element={<VehicleRentHome/>}></Route>
            <Route path="/BookGuider" element={<BookGuiderHome/>}></Route>

            <Route path="/9" element={<PaymentMethod/>}></Route>
            <Route path="/10" element={<PaymentSuccess/>}></Route>
            <Route path="/11" element={<PaymentFailed/>}></Route>
            <Route path="/Test" element={<Test/>}></Route>
            <Route path="/details/:id" element={<VehicleDetails />} />

          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App;
