import React from "react";
//import axios from 'axios';
import '../styles/Style.css'
import giraffe from '../assets/giraffe.png'

function Booking() {
/*    
    function handleForm(form) {
        form.preventDefault();
        axios.post('localhost:3001/book',form)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            })
            .then(console.log("sent"))
    
    }
*/
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
            <div className="contain text-center justify-content-center align-items-center">
                <h2 id="book-now-title">Book Now</h2>
                <div className="form-holder">   
                    <form method="post" action={'localhost:3001/book'}/*onSubmit={handleForm}*/>
                        <label>
                            Your Name: 
                            <input name="name"/>
                        </label>
                        <hr/>
                        <p>
                            Choose a Site:
                            <hr/>
                            <label><input type="radio" name="site" value="Chester"/>Chester Site</label>
                            <label><input type="radio" name="site" value="Chester"/>Bristol Site</label>
                        </p>
                        <hr/>
                        <label>Number of people: <input name="quantity"/></label>
                        <button id="booking_submit" type="submit">Submit & Pay</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;