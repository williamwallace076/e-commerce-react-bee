import React from 'react';
import "./GridFull.css";

import Card from '../homepageShopp/bestSelers/card/Card';


export default ()  =>{
    return(
    <div className='full-grid'>
            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Checkout </span></div>
            <div className="full-grid-area">
                <div className="sections">
                    <span>Showing 1-12 of 44 results</span>
                    <span>Sort by newness</span>
                </div>
                <div className="grid-full-products">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className="pagesing"><span>1</span>  2  3  4  5  ...  {'>'}  {'>>'}</div>
            </div>
        </div>
    )
}
