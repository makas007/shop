import React from "react";
import {useFetch} from '../useFetch.js'

function Test() {
  const data = useFetch('https://retoolapi.dev/z4s4bl/data')

  function qwe () {
    console.log(data);
  }


   return (
    <div>
      <button onClick={qwe}>CLICK</button>
    </div>
  )
}
export default Test;