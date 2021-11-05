import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "./Filters";
import CardList from './CardList.jsx';
import { shopDada } from "../store/shopData";

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

  useEffect(() => {
    dispatch(shopDada())
  })

   return (
    <div className="container2">
      <div className="categories">
        <div className="wrap-container">
          {category.map((item) => (
            <div className="category-name">{item}</div>
          ))} 
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