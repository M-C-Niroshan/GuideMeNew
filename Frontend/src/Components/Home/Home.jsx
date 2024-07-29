import React from "react";
import { useLocation} from "react-router-dom";

import Backgroundvid from '../Backgroundvid/Backgroundvid';
import Navigation from "../Navigation/Navigation";
import Tlanka from '../Tlanka/Tlanka';
import Cardslider from '../Cardslider/Cardslider';
import Festivals from '../Festivals/Festivals';
import Footer from '../Footer/Footer';
import Adventure from "../Adventure/Adventure";
import Intothewild from '../IntotheWild/IntotheWild'
import ThrillsandChills from '../ThrillsandChills/ThrillsandChills'
import Heritage from '../Heritage/Heritage'
import PristineBeauty from '../PristineBeauty/PristineBeauty'
import Chatbot from "../Chatbot/Chatbot";
import Review from '../Review/Review'


function Home(){
    const location=useLocation()
    return (
        <div className="homep">
            <Navigation/>
            <Backgroundvid/>
            <Tlanka/>
            <Cardslider/>
            <Festivals/>
            <Adventure/>
            <Intothewild/>
            <ThrillsandChills/>
            <Heritage/>
            <PristineBeauty/>
            <Chatbot/>
            <Footer/>
        </div>
    )
}

export default Home 