import React, { Component } from "react";
import styled from "styled-components";
import ImageBoxSlider from './ImageBoxSlider';
import NavBar from '../components/Navigation/NavBar';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import fillerImg from '../assets/dawg.png'
import blueicon from '../assets/blueicon.png'
import ScrollArrow from '../components/ScrollArrow'
import arrow from '../assets/hamburger.svg'

// import { AppRegistry, View } from 'react-native';

// let whiteSpace = styled.div`
// 	{
// 	  display: flex;
// 	  flex-direction: column;
// 	  align-items: flex-start;
// 	  backgroundColor: 'white';
// 	}
// `

// let img = styled.div`
// 	{
// 	  display: flex;
// 	  flex-direction: column;
// 	  align-items: flex-end;
// 	  backgroundColor:'skyblue';
// 	}
// 

const Arrow = styled.img`
  width: 2vw;
  &:hover {
      background: ${props => props.src? '#500' : '#555'};
    }
  z-index: 1;
  position: relative;
  left: 95vw;
  bottom: 5vh;
`
const handleClick = () => {
  window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

let containerStyle = {
	width: "100vw",
  height: "100vh" 
}

let LeftSideContainer = styled.div`
	width: 70%;
	height: 100%; 
	float: left;
	background-color: skyblue;
`

let RightSideContainer = styled.div`
	width: 30%;
	height: 100%;
	float: right;
  background-color: grey;
`
let ImageBoxSliderContainer = styled.div`
  margin: 2.5vw;
`
let SideImg = styled.img`
  height: 100%;
  width: 100%;
`

let titleStyle = {
	textAlign: 'left',
	fontSize: '3.5vw',
	margin: '2vw 2.5vw 1vw 2.5vw'
}

let subtitleStyle = {
	textAlign: 'left',
	fontSize: '1.25vw',
	marginLeft: '2.5vw',
	marginRight: '2.5vw'
}


// const whiteSpaceStyle = {
// 	display: flex,
// 	// align-items: flex-start,
// 	backgroundColor: 'white'
// };
// const imgStyle = {
// 	display: flex,
// 	// align-items: flex-end,
// 	backgroundColor: 'skyblue'
// };


export default class GenericPanelLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <div style={containerStyle}>
        {/* <BrowserRouter>
          <NavBar menuItems={this.props.menuItems} fixed/>
        </BrowserRouter> */}
        <LeftSideContainer>
        	<h1 style={titleStyle}>CONTROVERSIAL CUCR SPEAKERS DRAW MASSIVE PROTESTS, 
        	PROMPTING FREE SPEECH DEBATE</h1>
        	<p style={subtitleStyle}>After Columbia University College Republicans invited white nationalist 
        	speakers Mike Cernovich and Tommy Robinson to campus, hundreds of students 
        	reacted with outrage and organized protests, rallies, and marches against 
        	the speakers...</p>
          <ImageBoxSliderContainer>
            <ImageBoxSlider data = {this.props.data}/>
          </ImageBoxSliderContainer>
        </LeftSideContainer>
        <RightSideContainer>
          <SideImg src = {fillerImg}></SideImg>
          
        </RightSideContainer>
        <Arrow src={arrow} onClick = {handleClick}/>
      </div>
    );
  }
}
