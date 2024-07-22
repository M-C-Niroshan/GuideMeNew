import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Backgroundvid from '../Backgroundvid/Backgroundvid';
import Navigation from "../Navigation/Navigation";
import Tlanka from '../Tlanka/Tlanka';
import Cardslider from '../Cardslider/Cardslider';


function Home(){
    const location=useLocation()

    return (
        <div className="homep">
            <Backgroundvid/>
            <Navigation/>
            <Tlanka/>
            <Cardslider/>
        </div>
    )
}

export default Home 