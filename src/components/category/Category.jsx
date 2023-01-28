import React from "react";
import './Category.css'
import Left from './left/LeftArea'
import Right from './right/RightArea'

export default () => {
    return(
        <div className="category">
            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Checkout </span></div>
            <div className="category-area">
                <Left></Left>
                <Right></Right>
            </div>
        </div>
    )
}