import React from "react";
import '../styles/Style.css';
import Lottie from "lottie-react";
import Construction from "../assets/Under_Construction.json";


function Dev() {
    return(
        <div className="pageerror d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="contain text-center justify-content-center align-items-center">
                
                <h1 id="error">Under Construction</h1>
                <p id="error">this page is still under development</p>
                <Lottie id="animation" animationData={Construction} />
                <a href="/" ><button id="go-home">Go Home</button></a>
            </div>
        </div>
    )

}

export default Dev;