import React from "react";
import './Categories.css';
import CategorieCard from "./categorieCard/CategorieCard";

export default () => {
    return (

        <div className="categories">
           <CategorieCard color='#202344'></CategorieCard>
           <CategorieCard color='#303248'></CategorieCard>
           <CategorieCard color='#202344'></CategorieCard>
        </div>
    )
}