import React from "react";
import { ReactComponent as BagSVG } from '../icons/bag.svg';
import {setItemToCart} from '../store/shopData'
import { useDispatch } from "react-redux";



function Card(props) {
  const dispatch = useDispatch()
  // console.log(props.card, 'CARD PROPS ');
   return (
    <div className="card">
      <div className="card-img">
        <img src={props.card.logo} alt="" onError={(e)=>{e.target.onerror = null; e.target.src="/images/no-photo.jpg"}}/>
      </div>
      <div className="card-info">
        <div className="card-name">{props.card.name}</div>
        <div className="wrap-price">
          <BagSVG onClick={() => dispatch(setItemToCart(props.card))}/>
          <div className="card-price">{props.card.price}$</div>
        </div>
      </div>
    </div>
  )
}
export default Card;