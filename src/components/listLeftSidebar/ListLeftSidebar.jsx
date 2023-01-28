import React from 'react'
import LeftArea from '../category/left/LeftArea'
import './ListLeftSidebar.css'
import CardItem from '../listFull/listFullCard/listFullItem'

export default  () => {
    return ( 
        <div className='left-sidebar'>

            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Category </span></div>

            <div className="main-area">
                
                <div className='sidebar-left-area'>
                <LeftArea></LeftArea>
                </div>
                <div className='sidebar-right-area'>
                <div className="sections">
                    <span>Showing 1-12 of 44 results</span>
                    <span>Sort by newness</span>
                </div>
                    <CardItem title="Joust duffle bag"></CardItem>
                    <CardItem title="Warriors both reach"></CardItem>
                    <CardItem title="Endeavor DayTrip"></CardItem>
                    <CardItem title="Voyaege yoga bag"></CardItem>
                    <CardItem title="Teenager jeans"></CardItem>
                    <CardItem title="Gucci daytrip"></CardItem>
                </div>
            </div>

            <div className="pagesing"><span>1</span>  2  3  4  5  ...  {'>'}  {'>>'}</div>

        </div>
    )
}