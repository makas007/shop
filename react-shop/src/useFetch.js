import {useEffect, useState} from "react";


 export function useFetch(url) {
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    fetch(url).then((response) => {
      console.log('then1');
      return response.json()
    })
    .then((data) => {
      console.log('then2');
      setFetchData(data)
    })
  },[url])
  return fetchData
}



