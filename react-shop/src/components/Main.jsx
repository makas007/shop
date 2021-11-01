import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/allData.js';
import Carousel from './Carousel.jsx';
import Carousel2 from './Carousel2.jsx';
import Footer from './Footer.jsx';


function Main() {
  const data = useSelector(state => state.allData.names)
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])

  function myClick() {
    console.log(data);
    alert('Look in the console. There is data')
  }


  
   return (
    <div>
      <div className="carousel-wrap">
        <Carousel/>
      </div>
      <div className="block-1-wrapper">
        <div className="container">
          <div className="block-img">
            < img src="/images/block-image-1.png" alt="" />
          </div>
          <div className="block-text">
            <p>
              Like in a Dream is born from a dream: the possibility of finding unique, quality, handmade products, creations with a fascinating history, a dazzling personal style.
              After many years of searching for creators, we decided to create a platform to make them visible, support and promote crafts and artistic creation as a whole and share their experiences with you.
            </p>
          </div>
        </div>
      </div>
      <Carousel2/>
    </div>
  )
}
export default Main;