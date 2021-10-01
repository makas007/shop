import React from "react";
import {useSelector} from 'react-redux'

function Cart() {
  const itemsCart = useSelector(state => state.addData.itemsCart)
   return (
    <div>
      {itemsCart.map((item => (
        <div className="cart-items">
          <div>{item.name}</div>
            <div className="wrap-image">
              <img src={item.image} alt="" />
            </div>
        </div>
      )))}
    </div>
  )
}
export default Cart;
