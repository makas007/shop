import React from "react";
import {useSelector} from 'react-redux'
import Button from './Button.jsx';
import { delItemCart } from '../store/allData.js';
import { useDispatch } from "react-redux";
import CardList from "./CardList.jsx";
import Card from "./Card.jsx";


function Cart() {
  const itemsCart = useSelector(state => state.sliceShop.itemsCart)
  const dispatch = useDispatch()
  console.log(itemsCart, 'itemCart');

   return (
    <div className="card-list">
      {itemsCart.map((item) => (
        <Card card={item}/>
      ))}
    </div>
  )
}
export default Cart;
