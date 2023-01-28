import React from 'react';
import BestSelers from "./bestSelers/BestSelers";
import Slider from "./slider/Slider";
import StaticBlocks from "./staticBlocks/StaticBlocks";
import Categories from "./categories/Categories";
import ProductLists from "./productLists/ProductLists";
import SubstCrible from "./subscrible/Subscrible";

import "./HomepageShopp.css"


export default() => {
    return ( 
        <div className='homepage-shopp'>
            <Slider></Slider>
            <BestSelers></BestSelers>
            <StaticBlocks></StaticBlocks>
            <Categories></Categories>
            <ProductLists></ProductLists>
            <SubstCrible></SubstCrible>
        </div>
    )
}
 