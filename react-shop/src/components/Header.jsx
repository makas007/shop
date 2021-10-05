import React from 'react'
import {Route, Link, Switch, NavLink, BrowserRouter as Router,} from "react-router-dom";
import Cart from './Cart';
import Main from './Main';



function Header(props) {
  console.log(props, '1111');
   return (
      <div className="header">
        {/* <img className="header-img" src="./logo-shop.jpg" alt="" /> */}
          <nav>
            <Link to='/'>Main</Link>
            <Link to='/cart'>Cart</Link>
         </nav>
      </div>


  )
}
export default Header;