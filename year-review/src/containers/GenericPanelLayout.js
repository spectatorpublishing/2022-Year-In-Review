import React, { Component } from "react";
import styled from "styled-components";
import ImageBoxSlider from './ImageBoxSlider';
import scrollArrow from '../assets/hamburger.svg'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

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

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

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

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.black};
`

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
    this.handleClick = this.handleClick.bind(this)
    
  }

  state = { 
      selected: 0
  }

  handleClick(i) {
    this.setState({
      selected: i
    })
  }

  render() {
    return (
      [
      <MobileAndTablet>
        <MobileContainer>
          <ImageBoxSlider data = {this.props.data}/>
        </MobileContainer>
      </MobileAndTablet>,
      
      <Desktop>
      <div style={containerStyle}>
        <LeftSideContainer>
          <Link href={this.props.data[this.state.selected].url}>
        	  <h3 style = {head_style}>{this.props.data[this.state.selected].title}</h3>
        	  <p style = {subtitle_style}>{this.props.data[this.state.selected].description}</p>
          </Link>
          <ImageBoxSliderContainer>
            <ImageBoxSlider data = {this.props.data} handleClick = {this.handleClick} selected = {this.state.selected}/>
          </ImageBoxSliderContainer>
        </LeftSideContainer>
        <RightSideContainer img_src = {this.props.data[this.state.selected].img_src}/>
        <Arrow src={scrollArrow} onClick = {handleClick}/>
      </div>
      </Desktop>
      ]
    );
  }
}
