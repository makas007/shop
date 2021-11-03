import React, { useState, useEffect } from "react";
import axios from "axios";

function CardList(props) {
  const [allData, setAllData] = useState(null)

  async function getAllData() {
    return await axios.get('https://retoolapi.dev/tB2izy/data')
      .then((responce) => {
        console.log(responce.data)
        setAllData(responce.data)
        return responce.data
      })
  }

  useEffect(()=> {
    getAllData()
  },[])

   return (
    <div className="card-list">
      
    </div>
  )
}
export default CardList;