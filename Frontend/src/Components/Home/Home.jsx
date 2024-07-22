import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){
    const location=useLocation()

    return (
        <div className="homep">
            <h1>Hello {location.state.id} this is home</h1>
        </div>
    )
}

export default Home