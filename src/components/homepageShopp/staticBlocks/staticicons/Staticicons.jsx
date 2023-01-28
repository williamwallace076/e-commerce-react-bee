import React from "react";
import './Staticicons.css';
import StaticBlocks from "../StaticBlocks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from "@fortawesome/free-regular-svg-icons";

export default (Props) => {
    return (
        <div className="static-icon">
            
           <FontAwesomeIcon icon={Props.iconLogo} />
           <h1 className="title-icon">{Props.titleIcon}</h1>
           <h2 className="subtitle-icon">{Props.subtitleIcon}</h2>
        </div>
    )
}