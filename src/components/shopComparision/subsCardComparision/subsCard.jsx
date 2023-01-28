import React from "react";
import './subsCard.css'

export default (props) =>{
    return(
        <div className="subs-card-comparision">
            <h2 className="card-model">Product 1</h2>
            <p className="card-brand">Hewlett-Packard</p>
            <p className="card-summary">Lorem ipsum dolor sit amet, consectetur adipisicing eli, sed do eiusmood tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="add-to-cart" style={{backgroundColor:props.color, border:props.border}}>ADD TO CART</button>
            <button className="exclude" >❌</button>
        </div>
    )
}