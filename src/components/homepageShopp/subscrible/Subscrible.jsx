import React from "react";
import './Subscrible.css';
import Clients from "./Clients";

export default () => {
    return ( 
        <div className="subscrible-area"> 
        <div className="subscrible">
            <h1 className="subscrible-title">Get out especial discount</h1>
            <h2 className="subscrible-subtitle">click on the button bellow to recieve discount and news about the best products</h2>
            <div className="subscrible-input-area">
                <input type="email" className="subscrible-input" placeholder="Email Adress...." />
                <button type="submit" className="subscrible-button">GET COUPON NOW</button>
            </div>

        </div>
        <Clients></Clients>
        </div>
    )
}