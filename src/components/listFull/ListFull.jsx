import React from 'react';
import ListFullArea from './ListFullArea';
import './ListFull.css'


export default () => {
    return ( 
        <div className='list-full'>
            <div className="breadcrumbs"> Home {">>"} Page {">>"} Shop {'>>'} <span > Cart </span></div>
            <ListFullArea></ListFullArea>
        </div>
     )
}
 
