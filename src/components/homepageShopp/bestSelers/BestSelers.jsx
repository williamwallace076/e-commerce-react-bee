import React from "react";
import './BestSelers.css';
import Card from './card/Card';
import { Link } from "react-router-dom";

import { listApiItems } from "../../../api/products/apiProducts";

export default () => {
    return (
        <div className="best-selers">
            <div className="conteiner">
                <div className="bestSellers-info-area" >
                    <h1 className="bestSellers-title">BEST SELLERS</h1>
                    <h2 className="bestSellers-subtitle">The best production of us</h2>
                    <p className="bestSellers-paragraph">See here the main featured products, which are top 1 in sales</p>
                </div>

                <div className="list">
                    <Link to="/ProductsName"><Card price={listApiItems[0].valor} name={listApiItems[0].nome} img={listApiItems[0].img}></Card></Link>
                    <Link to="/ProductsName"><Card price={listApiItems[1].valor} name={listApiItems[1].nome} img={listApiItems[1].img}></Card></Link>
                    <Link to="/ProductsName"><Card price={listApiItems[2].valor} name={listApiItems[2].nome} img={listApiItems[2].img}></Card></Link>
                    <Link to="/ProductsName"><Card price={listApiItems[3].valor} name={listApiItems[3].nome} img={listApiItems[3].img}></Card></Link>
                </div>
            </div>
        </div>
    )
}