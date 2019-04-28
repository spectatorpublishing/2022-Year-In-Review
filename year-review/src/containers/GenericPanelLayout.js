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
`

let RightSideContainer = styled.div`
	width: 30%;
	height: 100%;
	float: right;
  background-color: grey;
  background-image: url(${({img_src}) => img_src});
`
let ImageBoxSliderContainer = styled.div`
  margin: 2.5vw;
`

let head_style = {
	textAlign: 'left',
	margin: '12vh 2vw 4vh 8vw',
}

let subtitle_style = {
	textAlign: 'left',
	margin: '4vh 2vw 4vh 8vw',
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
    console.log(this.props.data)
    return (
      // Try setting `flexDirection` to `column`.
      <div style={containerStyle}>
        {/* <BrowserRouter>
          <NavBar menuItems={this.props.menuItems} fixed/>
        </BrowserRouter> */}
        <LeftSideContainer>
        	<h1 style = {head_style}>{this.props.data.head}</h1>
        	<p style = {subtitle_style}>{this.props.data.description}</p>
          <ImageBoxSliderContainer>
            <ImageBoxSlider data = {this.props.data.article_data}/>
          </ImageBoxSliderContainer>
        </LeftSideContainer>
        <RightSideContainer img_src = {this.props.data.side_img}/>
        <Arrow src={arrow} onClick = {handleClick}/>
      </div>
    );
  }
}
