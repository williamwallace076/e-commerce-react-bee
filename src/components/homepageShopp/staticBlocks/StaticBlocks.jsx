import React from "react";
import './StaticBlocks.css';
import Staticicons from "./staticicons/Staticicons";

import { faGem, faPaperPlane,  } from "@fortawesome/free-regular-svg-icons";
import {faRepeat, faRocket} from "@fortawesome/free-solid-svg-icons"

export default (Props) => {
    return (
        <div className="static-blocks">
           <Staticicons iconLogo={faGem} titleIcon='SPECIAL OFERS' subtitleIcon="Shop Big Save Big"/>
           <Staticicons iconLogo={faPaperPlane} titleIcon='FREE DELIVERY' subtitleIcon="On Orders Above $99"/>
           <Staticicons iconLogo={faRepeat} titleIcon='30 DAYS RETURN' subtitleIcon="Police We Offers"/>
           <Staticicons iconLogo={faRocket} titleIcon='FASTEST SHIPPING' subtitleIcon="2 Days Express"/>
        </div>
    )
}