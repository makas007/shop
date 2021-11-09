import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "./Filters";
import CardList from './CardList.jsx';
import { shopDada } from "../store/shopData";
import extraData from '../extraData.json'
import Button from './Button.jsx';

function Categories() {
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
  const arr = extraData.map((item) => {
    console.log(item.categories);
  })

  useEffect(() => {
    dispatch(shopDada())
  })

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
          <Button name="button"/>
        </div>
        <div className="wrap-for-category">
          <Filters/>
          <CardList/>
        </div>
        
      </div>
    </div>

  )
}
export default Categories;