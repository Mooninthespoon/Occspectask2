import React from "react";
import '../styles/Style.css';
import giraffe from '../assets/giraffe.png';
import snapchat from '../assets/snapchatLogo.png';
import instagram from '../assets/instagramLogo.webp';
import facebook from '../assets/facebookLogo.png';

function Home() {
    
    return(
        <div className="page d-flex flex-column justify-content-center align-items-center vh-100">
            <nav className="navigation sticky-div">
                <div className="icon-text ">
                    <a href="/"><img src={giraffe} width={50} alt="giraffe icon"/></a>
                    <h2 className="Title">Riget Zoo Adventures</h2>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/hotels" >Hotels</a></li>
                    <li><a href="/booking" >Booking</a></li>
                    
                </ul>
            </nav>
            <div className="container-home text-center justify-content-center align-items-center">
                <h1 className="text-white">Your adventure awaits!</h1>
                <button  id="book-now"><a href="/booking">Book Now!</a></button>
            </div>
            <div className="home-footer">
                <h2>Follow us at @RigetZooAdventures on...</h2>
                <div id="logo-tray">
                    <img src={snapchat} alt="snapchat logo" width={80}/>
                    <img src={instagram} alt="instagram logo" width={80}/>
                    <img src={facebook} alt="facebook logo" width={80}/>
                </div>
            </div>
        </div>
    );
}

export default Home;