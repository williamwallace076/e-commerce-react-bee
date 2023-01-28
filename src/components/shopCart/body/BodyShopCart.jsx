import React from "react";

import './BodyShopCart.css';

import { Link } from "react-router-dom";

export default () => {
    return(
        <div className="BodyShopCart">
            
            <div className="breadcrumbs-bodyshopCart"> Home {">>"} Page {">>"} Shop {'>>'} <span> Car </span></div>

            
            <table className="cart-table" >
                <thead>
                    <tr >
                        <th className="th-products-bodyshopcard" >Products</th>
                        <th className="th-color-size">Color & size</th>
                        <th>Quanty</th>
                        <th>Price</th>
                        <th colSpan={2}>Total</th>
                    </tr>
                </thead>

                    <tr className="tr-tbody">
                        <td>
                            <div className="tr-tbody-products">
                                <div className="bodyshopp-card"></div>
                                <span>Casual man wearing coll</span>
                            </div>
                        </td>
                        <td className="td-color-size">
                            <div className="size-color">
                                <span>size: xl</span>
                                <span>Color black</span>
                            </div>
                        </td>
                        <td>
                            <input min="1" placeholder="0" type='number'></input>
                        </td>
                        <td>
                            <span>$120</span>
                        </td>
                        <td>
                            <span>$120</span>
                        </td>
                        <td className="td-button-close" >
                            <button className="button-close">X</button>
                        </td>

                    </tr>
                

                <tr className="tr-buttons-cart-table">
                    <td colSpan={6}>
                        <div className="butons-cart-table">
                            <button>UPDATE CART</button>
                            <Link to={"/GridLeftSideBar"}><button className="green">CONTINUE SHOPPING</button></Link>
                        </div>
                    </td>
                </tr>
                
            </table>

            <div className="checkout-area">

                <div className="checkout-component">
                    <h3 className="title-checkout-components">USE CUPON CODE</h3>
                    <h3 className="title-input-checkout">Enter you cupon here!</h3>
                    <div  className="input-area-components">
                        <input type="text" className="input-checkout cupon" placeholder="Enter you cupon here! "/>
                        <button className="checkout-button">APPLY</button>
                    </div>
                </div>

                <div className="checkout-component-usegift">
                    <h3 className="title-checkout-components">USE GIFT VOUNCHER</h3>
                    <h3 className="title-input-checkout">Enter you Gift Vouncher code here!</h3>
                    
                    <div className="input-area-components">
                    <input type="text" className="input-checkout gift" placeholder="Enter you Gift Vouncher code here!"/>
                    <button className="checkout-button">APPLY</button>
                    </div>
                </div>

                <div className="checkout-component">
                    <h3 className="title-checkout-components">SHIPPING AVALIABILITY</h3>
                    <h3 className="title-input-checkout">Select Country</h3>
                    <input type="text" className="input-checkout shipping" placeholder="Select Country" />
                    <h3 className="title-input-checkout">Select State</h3>
                    <input type="text" className="input-checkout shipping" placeholder="Select State" />
                    <h3 className="title-input-checkout">PostCode/Zip</h3>
                    <input type="text" className="input-checkout shipping" placeholder="PostCode/Zip"/>
                    <button className="checkout-button update-totals">UPDATE TOTALS</button>    
                    

                </div>
                
                <div className="checkout-component-table">

                    <h3 className="title-checkout-components">SHOPPING CARD CALCULATION</h3>

                    <table className="card-calculation-table">
                        <tr>
                            <th>Subtotal:</th>
                            <td>
                                $450
                            </td>
                        </tr>
                        <tr>
                            <th>Cupon:</th>
                            <td>- $50</td>
                        </tr>
                        <tr>
                            <th>Shipping:</th>
                            <td>Free Shipping</td>
                        </tr>
                        <tr className="total">
                            <th>Total:</th>
                            <td>$400</td>
                        </tr>
                    </table>
                    <Link to={"/ShopCheckout"} className="bt-link"><button className="checkout-button calculation-table" >PROCEED TO CHECKOUT</button></Link>
                </div>
            </div>
        </div>
    )
}