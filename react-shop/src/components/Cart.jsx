import React from "react";
import {useSelector} from 'react-redux'
import Button from './Button.jsx';
import { delItemCart } from '../store/allData.js';
import { useDispatch } from "react-redux";


function Cart() {
  const itemsCart = useSelector(state => state.allData.itemsCart)
  const dispatch = useDispatch()
  console.log(itemsCart);



   return (
    <div>
      <h1>Items</h1>
      {itemsCart.map((item => (
        <div className="cart-items">
          <div>{item.name}</div>
            <div className="wrap-image">
              <img src={item.image} alt="" />
              <Button name="Del" knock={() => dispatch(delItemCart(item)) }/>
            </div>
        </div>
      )))}
    </div>
  )
}
export default Cart;
