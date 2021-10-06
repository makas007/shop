import React from "react";
import {useSelector} from 'react-redux'
import Button from './Button.jsx';
import { delItemCart } from '../store/allData.js';
import { useDispatch } from "react-redux";


function Cart() {
  const itemsCart = useSelector(state => state.allData.itemsCart)
  const dispatch = useDispatch()
  console.log(itemsCart, 'itemCart');



   return (
    <div>
      <h1>Items</h1>
      {itemsCart.map(((item, index) => (
        <div className="cart-items" key={item.id}>
          <div>{item.name}</div>
            <div className="wrap-image">
              <img src={item.image} alt="" />
              <Button name="Del" knock={() => dispatch(delItemCart(index)) }/>
            </div>
        </div>
      )))}
    </div>
  )
}
export default Cart;
