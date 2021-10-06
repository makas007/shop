import React from 'react'
import { Link} from "react-router-dom";




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