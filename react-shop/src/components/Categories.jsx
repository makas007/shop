import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "./Filters";
import CardList from './CardList.jsx';
import { shopDada } from "../store/shopData";
import extraData from '../extraData.json'
import Button from './Button.jsx';
import { useSelector } from "react-redux"

function Categories() {
  const allDataShop = useSelector(state => state.sliceShop.cardInfo)
  const dispatch = useDispatch()
  const [category] = useState([
    'fashion',
    'jewellry',
    'accessories',
    'bags',
    'shoes',
    'beauty',
    'home',
    'art'
  ])
  // extraData.map((item) => {
  //   console.log(item.categories);
  // })
  
  useEffect(() => {
    dispatch(shopDada())
  },[dispatch])

  function handlerDropdown(e) {
    console.log(e.target);

  }

   return (
    <div className="container2">
      <div className="categories">
        <div className="wrap-container">
          {category.map((item) => (
            <div className="category-name" onClick={handlerDropdown}>{item}</div>
          ))} 
        </div>
        <div className="wrap-for-category">
          <Filters/>
          <CardList data={allDataShop}/>
        </div>
        
      </div>
    </div>

  )
}
export default Categories;