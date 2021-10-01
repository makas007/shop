import React from 'react'
import {Route, Link, BrowserRouter as Router,} from "react-router-dom";
import Cart from './Cart';



function Header(props) {
  console.log(props);
   return (
     <Router>
      <div className="header">
        <img className="header-img" src="./logo-shop.jpg" alt="" />
        <ul className="header-list">
          {/* {props.names.headerItems.map( item => <a className='header-item' href={item}>{item}</a>)} */}
          <li>
            <Link to="/">Main</Link>
          </li>
          {/* <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li> */}
          <li>
            <Link to={Cart}>Cart</Link>
          </li>
        </ul>
      </div>
     </Router>

  )
}
export default Header;