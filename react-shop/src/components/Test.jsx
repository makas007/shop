import React, { useState, useEffect, useMemo } from "react";
import {useFetch} from '../useFetch.js'

// const sum = n => {
//   console.log('sum func');
// 	return n + n
//  };

// function sum(n){
//   console.log('sum2');
//   return n+ n
// }

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  // const result = sum(num);
  const result = useMemo(() => sum(num), [num]);

  function sum(n){
    console.log('sum2');
    return n+ n
  }



  return (
    <div>
      <h1 onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "red" }}
      >
        Example
      </h1>
      <h2>
        Sum {result}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};
export default MemoComponent;