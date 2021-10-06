import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../store/allData.js'
import Button from './Button.jsx';
import { setToCartReducer } from '../store/allData.js';


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
      <ul>
        {data.map((item) => (
          <div className="card-items" key={item.id}>
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