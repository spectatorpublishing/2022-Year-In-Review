import React from 'react';
import styled from 'styled-components'
import arrow from '../assets/white-down-arrow-icon.png'

const Arrow = styled.img`
  width: 5vw;
  z-index: 1;
  position: relative;
  left: 90%;
  top: ${props => props.mobile? '-5vh' : '-5vh'};
  transform: rotate(180deg)
`
const handleClick = () => {
  window.scrollTo(0, 0)
}

const scrollArrow = (props) =>{
  return <Arrow {...
props} src={arrow} onClick = {handleClick}/>
}

export default scrollArrow