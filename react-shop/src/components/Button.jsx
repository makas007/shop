import React from 'react'

function Button(props) {
   return (
    <>
      <button className="my-btn">{props.name}</button>
    </>
  )
}
export default Button;