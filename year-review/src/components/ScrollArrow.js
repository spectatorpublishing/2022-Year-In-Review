import React, {Component} from 'react';
import styled from 'styled-components'
import arrow from '../assets/hamburger.svg'

const Arrow = styled.img`
  width: 2vw;
  &:hover {
      background: ${props => props.src? '#500' : '#555'};
    }
  z-index: 1;
  position: absolute;
  right: 2vw;
  bottom: 5vw;
`
const handleClick = () => {
  window.scrollTo(0, 0)
}

const scrollArrow = () =>{
  return <img src={arrow} onClick = {handleClick}/>
}

export default scrollArrow