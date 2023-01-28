import React from "react";
import './Card.css'

export default (props) => {

    return (
        <div className="card">
            <img src={props.img} className="card-img" ></img>
            <div className="card-img-subtitle">
                <h1 className="card-title">{props.name}</h1>
                <h2 className="card-price">{props.price}</h2>
                <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    )
}