import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../store/allData.js'
import Button from './Button.jsx';
import Header from './Header.jsx';
import { setToCartReducer } from '../store/allData.js';
import {Route, Link, Switch, BrowserRouter as Router,} from "react-router-dom";
import Cart from './Cart';



const siteData = {
  headerItems: ['Main', 'Categories', 'Products', 'Cart'],
  
}

function Main() {
  const data = useSelector(state => state.allData.names)
  const dispatch = useDispatch();
  

  useEffect(() => {
    console.log('USEEFFECT');
    console.log(dispatch);
    dispatch(fetchData())
  },[dispatch])

  function myClick() {
    console.log(data);
    alert('Look in the console. There is data')
  }


  
   return (

    <div>
      <ul>
        {data.map((item) => (
          <div className="card-items">
            <div>{item.name}</div>
            <div className="wrap-image">
              <img src={item.image} alt="" />
            </div>
            <div className='text-price'><span>Price: </span>{item.column_3}<span> $$$</span></div>
            <div className='btns'>
              <Button name="Click" knock={myClick}/>
              <Button name="Add" knock={() => dispatch(setToCartReducer(item)) }/>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default Main;