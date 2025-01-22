import React, { useEffect, useState } from "react";
import capybara from '../assets/Capybara.jpg';
import axios from 'axios';
import '../styles/Home.css'
import giraffe from '../assets/giraffe.png'

function Home() {
    const [message, setMessage] = useState('');
    const [different, setDiff] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(response => setMessage(response.data))
            .catch(error => console.error('Error fetching data:', error));
        axios.get('http://localhost:3001/a')
            .then(response => setDiff(response.data))
            .catch(error => console.error('Error fetching data:', error));
    },[]);

    return(
        <div className="page d-flex flex-column justify-content-center align-items-center vh-100">
            <nav className="navigation sticky-div">
                <div className="icon-text ">
                    <a href="/"><img src={giraffe} width={50} alt="giraffe icon"/></a>
                    <h2 className="Title">Riget Zoo Adventures</h2>
                </div>
                <ul>
                    <li><a href="Home.jsx">Home</a></li>
                    <li>Hotels</li>
                    <li>Booking</li>
                    
                </ul>
            </nav>
            <div className="contain text-center justify-content-center align-items-center">
                <img src={capybara} alt="Paul the Capybara"/>
                <p>{message}</p>
                <p>{different}</p>
            </div>
        </div>
    );
}

export default Home;