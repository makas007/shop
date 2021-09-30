import React from 'react'


function Header(props) {
  console.log(props);
   return (
    <div className="header">
      <img className="header-img" src="./logo-shop.jpg" alt="" />
      <ul className="header-list">
        {props.names.headerItems.map( item => <div className='header-item'>{item}</div>)}
      </ul>
    </div>
  )
}
export default Header;