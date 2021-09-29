import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../store/allData.js'
import Button from './Button.jsx';




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
  }
  
   return (
    <div>
      <button onClick={myClick}>clicker</button>
      <ul>
        {data.map((item) => (
          <div className="card-items">
            <div>{item.name}</div>
            <img src={item.image} alt="" />
            <Button name="Click"/>
          </div>
        ))}

      </ul>
    </div>
  )
}
export default Main;