import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import GuiderDetails from './Components/Guider/GuiderDetails';
import RenterDetails from './Components/Vehicle/RenterDetails';

import VehicleRentHome from './Components/pages/RentVehicle/VehicleRentHome';
import BookGuiderHome from './Components/pages/Bookguider/BookGuiderHome';

import  PaymentMethod  from './Components/Payments/PaymentMethod';
import  PaymentSuccess  from './Components/Payments/PaymentSuccess';
import  PaymentFailed  from './Components/Payments/PaymentFailed';
import Test from './Components/Login1/Test';

import AuthContainer from './Components/Login1/AuthContainer';
import AuthConGuider from './Components/Login1/AuthConGuider';
import AuthConRenter from './Components/Login1/AuthConRenter';
import AuthConGuiderSignIn from './Components/Login1/AuthConGuiderSignIn';


import Userguider from './Components/TravelPlanner/TravelPlanner';


import  VehicalrentN  from './Components/pages/Test';

import VehicleReservation from "./Components/pages/RentVehicle/VehicleReservation";
import GuiderReservation from "./Components/pages/Bookguider/GuiderReservation";

import Home from './Components/Home/Home';
import SignUpForm from './Components/Login1/SignUpFormGuider';
import VehicleReservationSuccess from './Components/pages/RentVehicle/VehicleReservationSuccess';
import GuiderReservationSuccess from './Components/pages/Bookguider/GuiderReservationSuccess';

import TravelerDashboard from './Components/Dashbord/Travaller';
import Renterdash from './Components/Dashbord/Renterdash';
import Guiderdash from './Components/Dashbord/Guiderdash';

/* import AboutUs from './Components/AboutUs/AboutUs';
 */

import 'bootstrap/dist/css/bootstrap.min.css';


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

            <Route path="/RentVehicle" element={<VehicleRentHome/>}></Route>
            <Route path="/BookGuider" element={<BookGuiderHome/>}></Route>
            <Route path="/reservation/:id" element={<VehicleReservation/>} />
            <Route path="/guider-reservation/:id" element={<GuiderReservation/>} />

            <Route path="/8" element={<PaymentMethod/>}></Route>
            <Route path="/9" element={<PaymentSuccess/>}></Route>
            <Route path="/10" element={<PaymentFailed/>}></Route>

            {/* <Route path="/new-page" element={<AuthContainer/>}></Route> */}
            <Route path="/AuthConGuider" element={<AuthConGuider/>}></Route>
            <Route path="/AuthContainer" element={<AuthContainer/>}></Route>
            <Route path="/AuthConRenter" element={<AuthConRenter/>}></Route>
            <Route path="/AuthConGuiderSignIn" element={<AuthConGuiderSignIn/>}></Route>

            <Route path='/PlanTrip' element={<Userguider/>}></Route> 

            <Route path='/TravelerDashboard' element={<TravelerDashboard/>}></Route> 
            <Route path='/Renterdash' element={<Renterdash/>}></Route> 
            <Route path='/Guiderdash' element={<Guiderdash/>}></Route> 

{/*             <Route path="/about-us" element={<AboutUs />} />
 */}
            {/* <Route path="/Test" element={<Test/>}></Route> */}

            <Route path="/vehicle-reservation-success" element={<VehicleReservationSuccess />} />
            <Route path="/guider-reservation-success" element={<GuiderReservationSuccess />} />

          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App;
