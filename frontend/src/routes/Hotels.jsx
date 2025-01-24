import React, {useState,useEffect} from "react";
import axios from 'axios';
import '../styles/Style.css';
import giraffe from '../assets/giraffe.png';
import roomPicture from '../assets/hotel-card-test.jpg';


function Hotels() {

    const [roomName, setRoomName] = useState('');
    const [roomPrice, setRoomPrice] = useState('');
    const [roomDescription, setRoomDesc] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:3001/room-desc')
            .then(respone => setRoomDesc(respone.data))
            .catch(error=> console.error('Error fetching data: ',error));
    })

    useEffect(()=> {
        axios.get('http://localhost:3001/room-price')
            .then(respone => setRoomPrice(respone.data))
            .catch(error => console.error('Error fetching data: ', error));
    })

    useEffect(() => {
        axios.get('http://localhost:3001/room-name')
            .then(response => setRoomName(response.data))
            .catch(error => console.error('Error fetching data:', error));
        
    },[]);

    class HotelCard extends React.Component {
        render(){
            return(
                <div className="hotel-card">
                    <img src={roomPicture} alt="Hotel Room with large window overlooking Lion Enclosure"/>
                    <div className="hotel-card-details" >
                        <h3>{roomName}</h3>
                        <hr/>
                        <h4>{roomPrice} / night</h4>
                        <p>{roomDescription}</p>
                    </div>
                    <button className="book-this-room"><a href="/dev">Book this room</a></button>

                </div>
            )
        }
    }

    

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
            <HotelCard/>
            
        </div>
    );
}

export default Hotels;