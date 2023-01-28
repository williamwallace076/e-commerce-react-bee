import React from "react";
import './CategorieCard.css';

export default (props) => {
    return (
        <div className="categorie-card" style={{backgroundColor:props.color}}>
           <div className="squad-2">
            <div className="squad-1">
                    <div className="categorie-title-area">
                        < h1 className="categorie-title">FASHION</h1>
                        <h2 className="categorie-subtitle">SUMMER & AUTUMN</h2>
                        <span className="winter-colection">WINTER COLECTION</span>
                    </div>
            </div>
           </div>
        </div>
    )
}