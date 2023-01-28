import React from "react";
import './Slider.css';
import { Link } from "react-router-dom";

import { useState } from "react";

import sliderImg1 from "../../../imgs/slider-img-1.webp"
import sliderImg2 from "../../../imgs/slider-img-2.webp"
import sliderImg3 from "../../../imgs/slider-img-3.jpg"

export default ()=> {

    

    const [index, setIndex] = useState(0)
    const imgs = [sliderImg1, sliderImg2, sliderImg3]
    const [img, setImg] = useState(imgs[index])

    function trocarSlide (){
        setIndex(index+1)
        setImg(imgs[index])
        if (index === imgs.length - 1){
            setIndex(0)
        }
    }

    return (
        <div>
                <div className="info-area">
                    <h1 className="title-1">THE BEST</h1>
                    <h2 className="title-2">WOOECOMMERCE</h2>
                    <p className="subtitle"> The best online store for you who love to be in fashion. here you will find the best products to upgrade your look</p>
                    <Link to="/GridLeftSideBar">
                        <button className="bt-buy"> 
                            <div className="button-cut-desing1" ></div>
                        BUY NOW
                            <div className="button-cut-desing2" ></div>
                        </button>
                    </Link>
                </div>


            <div className="main-slider" >
                <img src={img} alt="" className="slider-img on "/>
            </div>
        </div>
    )
}