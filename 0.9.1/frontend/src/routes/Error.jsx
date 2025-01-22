import React from "react";
import '../styles/Style.css';
import mill from '../assets/nothing-here.gif'


function Error() {
    return(
        <div className="pageerror d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="contain text-center justify-content-center align-items-center">
                
                <h1 id="error">404 - Page not found</h1>
                <p id="error">Nothing to see here...</p>
                <img id="animation" src={mill} alt="Wind Turbine" width={150}/>
                <button id="go-home"><a href="/" >Go Home</a></button>
            </div>
        </div>
    )

}

export default Error;