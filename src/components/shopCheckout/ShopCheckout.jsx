import React from "react";
import './ShopCheckout.css';

export default () => {
    return(
        <div className="shopp-checkout">
            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span> Car </span></div>

            <div className="formulary-area">
                <form className="formulary" action="submit">
                    <legend className="legend-formulary">BILLING DETAILS</legend>
                    <fieldset>
                        <div className="input-area-div">
                            <div  className="double-input-div">
                                <label htmlFor="fname">First Name</label>
                                <input className='input-formulary' type="text" id="fname" />
                            </div>
                            
                            <div className="double-input-div">
                                <label htmlFor="lname">Last Name</label>
                                <input className='input-formulary' type="text" id="lname"/>
                            </div>
                        </div>
                        <label htmlFor="country">Country</label>
                        <input className='input-formulary' type="text" id="country" placeholder="Country"/>
                        <label htmlFor="compName">Company Name</label>
                        <input className='input-formulary' type="text" id="compName" />
                        <label htmlFor="adress">Address</label>
                        <input className='input-formulary' type="text" id="adress" placeholder="Street Adress"/>
                        <label htmlFor="postcode">Postcode/Zip</label>
                        <input className='input-formulary' type="text" id="postcode"placeholder="Post Code" />
                        <label htmlFor="town">Town/City</label>
                        <input className='input-formulary' type="text" id="town" placeholder="Town/City"/>
                        <div className="input-area-div">
                            <div className="double-input-div">
                                <label htmlFor="email">Email Address</label>
                                <input className='input-formulary' type="text" id="email" placeholder="Emailuser@exemple.com"/>
                            </div> 
                            
                            <div className="double-input-div">
                                <label htmlFor="phone">Phone</label>
                                <input className='input-formulary' type="text" id="phone" placeholder="(00) 00000-0000"/>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div className="details-you-order">
                    <h3 className="title-you-order">YOUR ORDER</h3>

                    <div className="product-resume">
                        <table className="table-resume">
                            <tr className="tr-thead">
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>Casual men wearing coll shoes x1</td>
                                <td>$120</td>
                            </tr>
                            <tr>
                                <td>Casual men wearing x2</td>
                                <td>$280</td>
                            </tr>
                            <tr className="tr-subtotal">
                                <td>Subtotal</td>
                                <td>$400</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free Shipping</td>
                            </tr>
                            <tr className="tr-total">
                                <td>Total</td>
                                <td>$400</td>
                            </tr>
                        </table>
                    </div>

                    <div className="paypal-check">
                        <div className="checkbox-div">
                            <input type="checkbox" className="checkbox" /> 
                            <p className="checkbox-span">Direct Bank Transfer</p>
                        </div>
                            
                        <p>Make you payment directly into out bank account. <br /> Please use your order ID as the payment reference. <br /> Your order won't be shipped until the funds have cleared in our account. </p>
                        
                        <div className="checkbox-div">
                            <input type="checkbox" className="checkbox" />
                            <p className="checkbox-span">Cheque Payment</p>
                        </div>
                        <div className="checkbox-div">
                            <input id="paypal-checkbox" type="checkbox" className="checkbox"  />
                        <p for="paypal-checkbox" className="checkbox-span">PayPal</p>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="buttons-formulary-area">
                <div className="checkbox-div">
                <input className="bt-create-acount" type="checkbox"></input>
                <p>Create an Account?</p>
                </div>
                <button type="submit" className="bt-place-order" >PLACE ORDER</button>
            </div>
        </div>
    )
}