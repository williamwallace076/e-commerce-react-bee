import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomepageShopp from "./components/homepageShopp/HomepageShopp";
import ShopCart from "./components/shopCart/body/BodyShopCart";
import ShopCheckout from "./components/shopCheckout/ShopCheckout";
import ShopComparision from "./components/shopComparision/ShopComparision";
import GridLeftSidebar from "./components/category/Category";
import GridFull from "./components/gridFull/GridFull";
import ListFull from "./components/listFull/ListFull";
import ListLeftSidebar from "./components/listLeftSidebar/ListLeftSidebar";
import ProductsName from "./components/ProductsName/ProductsName";
import ProductsNameReview from "./components/productsNameReview/ProductsNameReview";
import Whishlist from "./components/whishlist/Whishlist";


export default props => {
    return (

        <Routes>
            {/* <Route path="/" element={< HomepageShopp/>} /> */}
            <Route exact path="/" element={<HomepageShopp />} />
            <Route path="/ShopCart" element={< ShopCart/>} />
            <Route path="/ShopCheckout" element={< ShopCheckout/>} />
            <Route path="/ShopComparision" element={< ShopComparision/>} />
            <Route path="/GridLeftSideBar" element={< GridLeftSidebar/>} />
            <Route path="/GridFull" element={< GridFull/>} />
            <Route path="/ListFull" element={< ListFull/>} />
            <Route path="/ListLeftSidebar" element={< ListLeftSidebar/>} />
            <Route path="/ProductsName" element={< ProductsName/>} />
            <Route path="/ProductsNameReview" element={< ProductsNameReview/>} />
            <Route path="/WishList" element={< Whishlist/>} />
            
        </Routes>
    );

}