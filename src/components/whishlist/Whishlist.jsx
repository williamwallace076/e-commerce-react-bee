import React from 'react';
import "./Whislist.css"

export default  () => {
    return (  
        <div className='whishlist'>
              <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Wishlist </span></div>
              <table className='table'>
                <tr>
                    <th>Products</th>
                    <th>
                        <div className='size-price-header'>
                            <h3>Color & size </h3>
                            <h3>Price</h3>
                        </div>
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                       <div className='product-area'>
                        <img className='img-item' src="" alt="" /> 
                        <h3>Casual men wearing cool shoe</h3>
                       </div>
                    </td>
                    <td className='size-color-area'>
                        <div className='size-color-price-td'>
                            <div className='size-color-td'> 
                                <span>Size: XL</span>
                                <span>Color: Black</span>
                            </div>
                            <span>
                            $120
                            </span>
                        </div>
                    </td>
                    <td className='bt-area-td'>
                        <div className='bt-addcart-exclude-td'>
                        <button>ADD TO CART</button>
                        <span>X</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                       <div className='product-area'>
                        <img className='img-item' src="" alt="" /> 
                        <h3>Casual men wearing cool shoe</h3>
                       </div>
                    </td>
                    <td className='size-color-area'>
                        <div className='size-color-price-td'>
                            <div className='size-color-td'> 
                                <span>Size: XL</span>
                                <span>Color: Black</span>
                            </div>
                            <span>
                            $120
                            </span>
                        </div>
                    </td>
                    <td className='bt-area-td'>
                        <div className='bt-addcart-exclude-td'>
                        <button>ADD TO CART</button>
                        <span>X</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                       <div className='product-area'>
                        <img className='img-item' src="" alt="" /> 
                        <h3>Casual men wearing cool shoe</h3>
                       </div>
                    </td>
                    <td className='size-color-area'>
                        <div className='size-color-price-td'>
                            <div className='size-color-td'> 
                                <span>Size: XL</span>
                                <span>Color: Black</span>
                            </div>
                            <span>
                            $120
                            </span>
                        </div>
                    </td>
                    <td className='bt-area-td'>
                        <div className='bt-addcart-exclude-td'>
                        <button>ADD TO CART</button>
                        <span>X</span>
                        </div>
                    </td>
                </tr>
              </table>
        </div>
    )
}
 
