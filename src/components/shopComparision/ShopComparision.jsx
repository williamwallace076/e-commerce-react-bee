import React from "react";
import CardComparision from "./cardComparision/cardComparision";
import './ShopComparision.css';
import SubsCard from './subsCardComparision/subsCard'

export default () => {
    return(
        <div className="shop-comparision">
            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Comparision </span></div>

            <div className="comparision-area">
                <div className="items-header">
                    <p className="products">Products</p>
                    <p className="image">Image</p>
                    <p className="Price">Prince</p>
                    <p className="Rating">Rating</p>
                </div>
                <CardComparision></CardComparision>
                <CardComparision></CardComparision>
                <CardComparision></CardComparision>
                <div className="subs-header">
                    <p className="model">Model</p>
                    <p className="brand">Brand</p>
                    <p className="summary">Summary</p>
                </div>
                <SubsCard ></SubsCard>                
                <SubsCard color="#00a951" border="none"></SubsCard>                
                <SubsCard></SubsCard>                
            </div>
        </div>
    )
}