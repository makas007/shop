import React, { useState } from "react";
import {ReactComponent as BagSVG} from '../icons/bag.svg'



function Card(props) {

   return (
    <div className="card">
      <div className="card-img">
        <img src={props.data.logo} alt="" onError={(e)=>{e.target.onerror = null; e.target.src="/images/no-photo.jpg"}}/>
      </div>
      <div className="card-info">
        <div className="card-name">{props.data.name}</div>
        <div className="wrap-price">
          <BagSVG/>
          <div className="card-price">{props.data.price}$</div>
        </div>
      </div>
    </div>
  )
}
export default Card;