import React from 'react';
import Card from '../homepageShopp/bestSelers/card/Card';
import './ProductsName.css';
import { Link } from 'react-router-dom';


export default () => {

    return (
        <div className='products-name'>
            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Product </span></div>
            <div className='product'>
                <div className='product-logo-area'>

                    <img className='product-main-img'></img>

                    <div className='roller-imgs-area'>
                        <div className="bt-rollers">
                            <button className='bt-roler left'>{'<'}</button>
                            <button className='bt-roler right'>{'>'}</button>
                        </div>
                        <div className='img-conteiner-items'>
                            <img className='img-item' src="" alt="" />
                            <img className='img-item' src="" alt="" />
                            <img className='img-item' src="" alt="" />
                        </div>
                    </div>

                </div>
                <div className='product-info-area'>
                    <h1 className='product-title'>This is product name</h1>
                    <div className='price-rate'>
                        <span className='price'>$250.00</span>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <p className='product-decription'>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed fo eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='selection-type-product'>
                        <input className='select-size' type="text" value='Select Size' />
                        <div className='select-color-area'> 
                            <span>Select color</span>
                            <input className='select-color' type="color" />
                        </div>
                    </div>
                    <div className='product-quanties'>
                        <button className="bt more">+</button>
                        <div className='quantitie-number'>3</div>
                        <button className="bt less">-</button>
                    </div>
                    <div className='bt-area'>
                        <Link to={"/ShopCart"}><button className='bt-product add-to-cart'>ADD TO CART</button></Link>
                        <button className='bt-product'>❤</button>
                        <button className='bt-product'>↺</button>
                    </div>
                </div>
            </div>

            <div className='description'>
                <div className='desc-title-area'>
                    <Link to={"/ProductsName"}><div className='bt desc'>Description</div></Link>
                    <Link to={"/ProductsNameReview"}><div className='bt review'>Reviews {'('} 1 {')'}</div></Link>
                </div>

                <p className='desc-area-paragraph'>
                    <span>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed fo eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <span>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed fo eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <span>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed fo eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

                </p>
            </div>

            <div className='related-products'>
                <div className='related-area'>
                    <h3 className="related-products-title">Related Products</h3>
                    <div className='left-right-arrows'>
                        <button className="bt-roll left">←</button>
                        <button className="bt-roll right">→</button>
                    </div>
                </div>
                <div className='related-products-area'>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
      )
}
 
 