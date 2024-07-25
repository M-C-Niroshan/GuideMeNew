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
import Test from './Components/Login1/Test';

import AuthContainer from './Components/Login1/AuthContainer';
import AuthConGuider from './Components/Login1/AuthConGuider';
import AuthConRenter from './Components/Login1/AuthConRenter';


import  VehicalrentN  from './Components/pages/Test';

import Home from './Components/Home/Home';
import SignUpForm from './Components/Login1/SignUpFormGuider';

function App() {
  return (
    <div className="app">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route> 
            <Route path="/0" element={<Login/>}></Route>
            <Route path="/1" element={<SignUpForm/>}></Route>
            <Route path="/2" element={<GuiderDetails/>}></Route>
            <Route path="/3" element={<RenterDetails/>}></Route>
            <Route path="/4" element={<VehicleDetails/>}></Route>
            <Route path="/5" element={<VehicleRentHome/>}></Route>
            <Route path="/6" element={<RentYourVehicleOld/>}></Route>
            <Route path="/7" element={<BookYourGuiderOld/>}></Route>
            <Route path="/8" element={<PaymentMethod/>}></Route>
            <Route path="/9" element={<PaymentSuccess/>}></Route>
            <Route path="/10" element={<PaymentFailed/>}></Route>
            <Route path="/new-page" element={<AuthContainer/>}></Route>
            <Route path="/55" element={<AuthConGuider/>}></Route>
            <Route path="/56" element={<AuthContainer/>}></Route>
            <Route path="/57" element={<AuthConRenter/>}></Route>
            <Route path="/Test" element={<Test/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App;
