import React, { useState } from "react";


function Categories() {
  const [category, setCategory] = useState([
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
    <div className="categories">
      <div className="wrap-container">
        {category.map((item) => (
          <div className="category-name">{item}</div>
        ))} 
      </div>

    </div>
  )
}
export default Categories;