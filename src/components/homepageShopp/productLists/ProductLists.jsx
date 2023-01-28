import React from "react";
import './ProductLists.css'
import Card from '../bestSelers/card/Card';
import { Link } from "react-router-dom";

import { listApiItems } from "../../../api/products/apiProducts";

export default () => {
    return (  
        <div className="product-lists">
            <div className="products-title-area">
                <h1 className="products-title">FEATURED PRODUCTS</h1>
                <h2 className="products-subtitle">Newest trends from top brands</h2>
            </div>

            <div className="product-list-cards">
                <Link to="/ProductsName"><Card name={listApiItems[0].nome} price={listApiItems[0].valor} img={listApiItems[0].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[1].nome} price={listApiItems[1].valor} img={listApiItems[1].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[2].nome} price={listApiItems[2].valor} img={listApiItems[2].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[3].nome} price={listApiItems[3].valor} img={listApiItems[3].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[4].nome} price={listApiItems[4].valor} img={listApiItems[4].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[5].nome} price={listApiItems[5].valor} img={listApiItems[5].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[6].nome} price={listApiItems[6].valor} img={listApiItems[6].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[7].nome} price={listApiItems[7].valor} img={listApiItems[7].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[8].nome} price={listApiItems[8].valor} img={listApiItems[8].img}></Card></Link>
                <Link to="/ProductsName"><Card name={listApiItems[9].nome} price={listApiItems[9].valor} img={listApiItems[9].img}></Card></Link>
                    
            </div>
        </div>
    )
}