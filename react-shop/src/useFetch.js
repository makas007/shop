import {useEffect, useState} from "react";


 export function useFetch(url) {
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    fetch(url).then((response) => {
      return response.json()
    })
    .then((data) => {
      setFetchData(data)
    })
  },[url])
  return fetchData
}

