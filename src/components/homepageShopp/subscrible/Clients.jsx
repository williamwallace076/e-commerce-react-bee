import React from "react";
import './Clients.css';
import clientLogo1 from '../../../imgs/1.png'
import clientLogo2 from '../../../imgs/2.png'
import clientLogo3 from '../../../imgs/3.png'
import clientLogo4 from '../../../imgs/4.png'

export default () => {
    return (  
        <div className="clients">
           <img src={clientLogo1} className="clients-icon"></img>
           <img src={clientLogo2} className="clients-icon"></img>
           <img src={clientLogo3} className="clients-icon"></img>
           <img src={clientLogo4} className="clients-icon"></img>
        </div>
    )
}