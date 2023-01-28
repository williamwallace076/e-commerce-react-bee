import React from 'react';
import "./ProductsNameReview.css";
import Card from '../homepageShopp/bestSelers/card/Card';

import { Link } from 'react-router-dom';

export default () => {
    return ( 
    <div className='product-name-review'>
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

                <div className='review-area'>
                    <div className="reviews">
                        <span className='reviews-title'>1 reviews for etiam trisque nisl</span>
                        <div className="review-item">
                            <img src="" alt="" className="img-review" />
                           <div className="review-item-desc">
                            <div className='rate-date-conteiner'>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span className='date'>Jun3,2017</span>
                            </div>
                            <span>JOHN GREEN</span>
                            <span>This will go great with my Hoodie that i ordered a few weeks ago</span>
                           </div>
                        </div>
                    </div>
                    <div className="add-review">
                        <h3 className='add-review-title'>Add a Review</h3>
                        <div className='add-review-input-area'>
                            <input placeholder="Your Name..." type="text" className='inp review-user-name'/>
                            <input placeholder="Your Email..." type="text" className='inp review-user-email'/>
                        </div>
                        <div className='add-rating-review-area'>
                            <span>Your Review</span>
                            <div className='add-rating-area'>
                                <span>Your Rating :</span>
                                <ul className='rating-ul'>
                                    <li> ☆ | </li>
                                    <li> ☆ ☆ | </li>
                                    <li> ☆ ☆ ☆ | </li>
                                    <li> ☆ ☆ ☆ ☆  | </li>
                                    <li> ☆ ☆ ☆ ☆ ☆ |</li>
                                </ul>
                            </div>
                        </div>
                        <textarea className='add-review-text' placeholder='Write you review here...' type="text" />
                    <button className='add-review-submit' >SUBMIT</button>
                    </div>
                </div>
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