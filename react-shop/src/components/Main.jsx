import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/allData.js';
import Carousel from './Carousel.jsx';


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
      <Carousel/>
    </div>
  )
}
export default Main;