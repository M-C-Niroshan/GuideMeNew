import React from "react";
import { useLocation} from "react-router-dom";

import Backgroundvid from '../Backgroundvid/Backgroundvid';
import Navigation from "../Navigation/Navigation";
import Tlanka from '../Tlanka/Tlanka';
import Cardslider from '../Cardslider/Cardslider';
import Festivals from '../Festivals/Festivals';
import Footer from '../Footer/Footer';

function Home(){
    return (
        <div className="homep">
            <Navigation/>
            <Backgroundvid/>
            <Tlanka/>
            <Cardslider/>
            <Festivals/> 
            <Footer/>
        </div>
    )
}

export default Home 