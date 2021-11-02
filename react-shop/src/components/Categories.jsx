import React, { useState } from "react";
import Filters from "./Filters";


function Categories() {
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
   return (
    <div className="container2">
      <div className="categories">
        <div className="wrap-container">
          {category.map((item) => (
            <div className="category-name">{item}</div>
          ))} 
        </div>
        <Filters/>
      </div>
    </div>

  )
}
export default Categories;