import React from "react"
import './LeftArea.css'

export default () => {
    return(
        <div className="left-area">
            <div className="left-area-categories">
                <span className="tt title-categories">CATEGORIES</span>
                <ul className="lista-categories">
                    <li className="list-item-categories"><span>Acessories</span></li>
                    <li className="list-item-categories"><span>Dresses</span></li>
                    <li className="list-item-categories"><span>Women</span></li>
                    <li className="list-item-categories"><span>Men</span></li>
                    <li className="list-item-categories"><span>Watch</span></li>
                    <li className="list-item-categories"><span>Clothing</span></li>
                    <li className="list-item-categories"><span>Bags</span></li>
                </ul>
            </div>
            <div className="left-area-priceFilter">
                <span className="tt title-priceFilter">PRICE FILTER</span>
                <input type="range" name="" id="" />
                <div className="search-filter-area">
                    <input type="text" name="min" id="min" value={'$10'} />
                    <input type="text" name="max" id="max" value={'$3000'} />
                    <button className="bt-search-price-icon">🔍</button>
                </div>
            </div>
            <div className="left-area-size">
                <span className="tt title-size">SIZE</span>
                <div className="bt-size-area">
                    <button className="bt-size-selection">XS</button>
                    <button className="bt-size-selection" style={{backgroundColor:'#00a951'}}>S</button>
                    <button className="bt-size-selection">M</button>
                    <button className="bt-size-selection">L</button>
                    <button className="bt-size-selection">SL</button>
                    <button className="bt-size-selection">XL</button>
                    <button className="bt-size-selection">XXL</button>
                </div>
            </div>
            <div className="left-area-colors">
                <span className="tt title-colors">COLORS</span>
                <div><input type="checkbox" /> <span>Black</span></div>
                <div><input type="checkbox" /> <span>White</span></div>
                <div><input type="checkbox" /> <span>Blue</span></div>
                <div><input type="checkbox" /> <span>Yellow</span></div>
                <div><input type="checkbox" /> <span>Yellow</span></div>
            </div>
            <div className="left-area-topRated">
                <span className="tt title-topRated">TOP RATED</span>
                <img className="img-icon-topRated"/>
                <img className="img-icon-topRated"/>
                <img className="img-icon-topRated"/>
            </div>
            <div className="left-area-popupAds"></div>
            <img className="img-ads" style={{backgroundColor:"black"}}/>
        </div>
    )
}