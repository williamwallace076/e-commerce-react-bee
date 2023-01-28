import React from 'react';
import './listFullItem.css'
export default (props) => {
    return ( 
    <div className='listFull-item'>
        <div className="item-img" ></div>
        <div className='subs-item'>
            <h1 className="item-title">{props.title}</h1>
            <h2 className="item-price">$250.00</h2>
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <p className='desc-item'>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed fo eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <span className='tag'>Shoes T-shirt Teen</span>
            <div className='fullitem-bt-area'>
                <button className='bt-Fullitem add-cart'>ADD TO CART</button>
                <button className='bt-Fullitem icon'>❤</button>
                <button className='bt-Fullitem icon'>↺</button>
            </div>
        </div>

    </div>
    )
}
 
