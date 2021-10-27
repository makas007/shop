import React from 'react'
import { Link} from "react-router-dom";
import {ReactComponent as UserSVG} from '../icons/user.svg'
import {ReactComponent as SearchSVG} from '../icons/search.svg'
import {ReactComponent as BagSVG} from '../icons/bag.svg'
import {ReactComponent as HeartSVG} from '../icons/heart.svg'
import {ReactComponent as FacebookSVG} from '../icons/facebook.svg'
import {ReactComponent as IstagramSVG} from '../icons/instagram.svg'
import {ReactComponent as LogoSVG} from '../icons/logo.svg'
import {FlagSVG} from './Icons';





function Header(props) {
  console.log(props, '1111');
   return (
      <div className="header">
          <div className="header-up">
            <div className={`container`}>
              <div className="header-up-lang">
                <div>EN</div>
                < FlagSVG/>
                <div>EUR</div>
              </div>
            <div className="header-up-social">
              <FacebookSVG/>
              <IstagramSVG/>
            </div>
            </div>
          </div>
          <div className="header-middle">
            <div className="container">
              <div className="header-middle-left">
                <Link to='/' className="header-links">Men</Link>
                <Link to='/' className="header-links">Woman</Link>
                <Link to='/' className="header-links">Kids</Link>
              </div>
                <LogoSVG className='header-logo'/>
              <div className="header-middle-right">
                <SearchSVG/>
                <UserSVG/>
                <HeartSVG/>
                <BagSVG/>
              </div>
            </div>
            
          </div>
          <div className="header-down">
            <div className="container">
              <Link to ='Fashion' className="header-links">Fashion</Link>
              <Link to='/' className="header-links">Accessories</Link>
              <Link to='/' className="header-links">Bags</Link>
              <Link to='/' className="header-links">Shoes</Link>
              <Link to='/' className="header-links">Home</Link>
              <Link to='/' className="header-links">Art</Link>
            </div>
          </div>          
      </div>


  )
}
export default Header;