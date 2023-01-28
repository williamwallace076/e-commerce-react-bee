import React from 'react';
import CardItem from "./listFullCard/listFullItem";
import './ListFullArea.css'

export default () => {
    return ( 
        <div className='list-full-area'>
                <div className="sections">
                    <span>Showing 1-12 of 44 results</span>
                    <span>Sort by newness</span>
                </div>
                <div className="itemProducts">
                    <CardItem title="Treatise on the"></CardItem>
                    <CardItem title="Joust duffle bag"></CardItem>
                    <CardItem title="Warriors both reach"></CardItem>
                    <CardItem title="Endeavor DayTrip"></CardItem>
                    <CardItem title="Voyaege yoga bag"></CardItem>
                    <CardItem title="Teenager jeans"></CardItem>
                    <CardItem title="Gucci daytrip"></CardItem>
                </div>
                <div className="pagesing"><span>1</span>  2  3  4  5  ...  {'>'}  {'>>'}</div>
     </div>
     )
}
 
