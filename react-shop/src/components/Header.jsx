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
          <div className="header-up-lang">
            <div>EN</div>
              <FlagSVG/>
            <div>EUR</div>
          </div>
          <div className="header-up-social">
            <FacebookSVG/>
            <IstagramSVG/>
          </div>
        </div>
        <div className="header-middle">
          <div className="header-middle-left">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
          </div>
            <LogoSVG className='header-logo'/>
          <div className="header-middle-right">
            <SearchSVG/>
            <UserSVG/>
            <HeartSVG/>
            <BagSVG/>
          </div>
        </div>
        <div className="header-down">
          <div className="header-down-categories">
            <Link to ='Fashion'>Fashion</Link>
            <Link to='/'>Accessories</Link>
            <Link to='/'>Bags</Link>
            <Link to='/'>Shoes</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Art</Link>
          </div>
        </div>
      </div>


  )
}
export default Header;