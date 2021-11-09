import React from 'react'
import styled from "styled-components";
import './style.css'

const Btn = styled.button`
width: 120px;
height: 30px;
background: rgba(162, 209, 255, 0.778);
color: black;
border-radius: 5px;
font-size: 15px;
cursor: pointer;
`;

function Button(props) {
   return (
    <>
      <Btn className="my-btn" onClick={props.knock}><span>{props.name}</span></Btn>
    </>
  )
}
export default Button;

