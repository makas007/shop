import React, { useState } from "react";

function Filters() {
  const [filterNames] = useState([
    'Made in',
    'Made by',
    'Ethical products',
    'Size',
    'Material',
    'Stones & Pearls',
    'Colour',
    'Pattern',
    'Style',
    'Price',
    'Sales',
  ])
   return (
    <div className="filters-wrapper">
      <div className="filters">
        {filterNames.map((name) => (
          <select className="select-name" size="1">
            <option value={name} selected>{name}</option>
          </select>
        ))}
        <button>Show all filters</button>
      </div>
    </div>
  )
}
export default Filters;