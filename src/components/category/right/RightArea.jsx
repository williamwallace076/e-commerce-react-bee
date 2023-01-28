import React from "react";
import './RightArea.css';
import Card from '../../homepageShopp/bestSelers/card/Card';
import { Link } from "react-router-dom";

import { listApiItems } from "../../../api/products/apiProducts";




export default () => {
    return(
        <div className="right-area">
            <div className="sections">
                <span>Showing 1-12 of 44 results</span>
                <span>Sort by newness</span>
            </div>
            <div className="right-area-products">
                <Link to="/ProductsName"><Card id={listApiItems[0].id} img={listApiItems[0].img} price={listApiItems[0].valor}   name={listApiItems[0].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[1].id} img={listApiItems[1].img} price={listApiItems[1].valor}   name={listApiItems[1].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[2].id} img={listApiItems[2].img} price={listApiItems[2].valor}   name={listApiItems[2].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[3].id} img={listApiItems[3].img} price={listApiItems[3].valor}   name={listApiItems[3].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[4].id} img={listApiItems[4].img} price={listApiItems[4].valor}   name={listApiItems[4].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[5].id} img={listApiItems[5].img} price={listApiItems[5].valor}   name={listApiItems[5].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[6].id} img={listApiItems[6].img} price={listApiItems[6].valor}   name={listApiItems[6].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[7].id} img={listApiItems[7].img} price={listApiItems[7].valor}  name={listApiItems[7].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[8].id} img={listApiItems[8].img} price={listApiItems[8].valor}   name={listApiItems[8].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[9].id} img={listApiItems[9].img} price={listApiItems[9].valor}   name={listApiItems[9].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[10].id} img={listApiItems[10].img} price={listApiItems[10].valor} name={listApiItems[10].nome}></Card></Link>
                <Link to="/ProductsName"><Card id={listApiItems[11].id} img={listApiItems[11].img} price={listApiItems[11].valor} name={listApiItems[11].nome}></Card></Link> 
            </div>
            <div className="category-pagesing"> 1  2  3  4  5  ...  {'>'}  {'>>'}</div>
        </div>
    )
}