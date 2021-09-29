import React from 'react'
import styled from "styled-components";
import './style.css'

const Btn = styled.button`
width: 120px;
height: 30px;
background: rgba(2, 128, 255, 0.778);
color: white;
border-radius: 3px;
font-size: 15px;
text-transform: uppercase;
`;

function Button(props) {
   return (
    <>
      <Btn className="my-btn"><span>{props.name}</span></Btn>
    </>
  )
}
export default Button;

