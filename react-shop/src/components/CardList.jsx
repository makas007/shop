import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useSelector } from "react-redux"

function CardList(props) {
  // const [allData, setAllData] = useState(null)
  const allDataShop = useSelector(state => state.sliceShop.cardInfo)


  // async function getAllData() {
  //   return await axios.get('https://retoolapi.dev/tB2izy/data')
  //     .then((responce) => {
  //       console.log(responce.data)
  //       setAllData(responce.data)
  //       return responce.data
  //     })
  // }

  // useEffect(()=> {
  //   getAllData()
  // },[])
    console.log(allDataShop, 'alldata card list')
   return (
    
    <div className="card-list">
      {allDataShop.map((item) => (
        <Card data={item}/>
      ))}
    </div>
  )
}
export default CardList;