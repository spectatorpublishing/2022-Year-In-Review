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

const mobileSize = 992

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
  position: absloute;
  right: 95vw;
  top: 95vh;
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
  height: "100vh",
  postion: "relative",
}

let TopContainer = styled.div`
  width: 100vw;
  height: ${props => props.isMobile? '40vh' : '60vh'};
  float: top;
  background-image: url(${({img_src}) => img_src});
`

let BottomContainer = styled.div`
	width: 100vw;
	height: ${props => props.isMobile? '60vh' : '40vh'};
	float: bottom;
  background-color: ${props => props.theme.indigo};
`

let ImageBoxSliderContainer = styled.div`

`

let head_style = {
	textAlign: 'left',
	padding: '12vh 2vw 4vh 8vw',
  color: "white",
  width: "60vw",
}

let subtitle_style = {
	textAlign: 'left',
	padding: '4vh 2vw 4vh 8vw',
  color: "white",
  width: "60vw",
}

let mobile_head_style = {
  textAlign: 'left',
  padding: '4vh 0vw 2vh 8vw',
  color: "white",
  width: "80vw",
}

let mobile_subtitle_style = {
  textAlign: 'left',
  padding: '0vh 0vw 4vh 8vw',
  color: "white",
  width: "80vw",
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
      selected: 0,
      isMobile: window.innerWidth <= mobileSize,
  }

  componentWillMount() {
      window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
      this.setState({ isMobile: window.innerWidth <= mobileSize });
  };

  handleClick(i) {
    this.setState({
      selected: i
    })
  }

  render() {
    return (
      [
      <MobileAndTablet>
        <TopContainer img_src = {this.props.data.img_src} isMobile = {this.state.isMobile} />

        <BottomContainer isMobile = {this.state.isMobile}>
          <h3 style = {mobile_head_style}>{this.props.data.title}</h3>
          
          <ImageBoxSliderContainer>
            <ImageBoxSlider data = {this.props.data.article_box_data} handleClick = {this.handleClick} selected = {this.state.selected}/>
          </ImageBoxSliderContainer>
          <Arrow src={scrollArrow} onClick = {handleClick}/>
        </BottomContainer>
      </MobileAndTablet>,
      
      <Desktop>
      <div style={containerStyle}>
        <TopContainer img_src = {this.props.data.img_src}>
            <h3 style = {head_style}>{this.props.data.title}</h3>
            <p style = {subtitle_style}>{this.props.data.description}</p>
        </TopContainer>

        <BottomContainer>
            <ImageBoxSlider data = {this.props.data.article_box_data} handleClick = {this.handleClick} selected = {this.state.selected}/>
            <Arrow src={scrollArrow} onClick = {handleClick}/>
        </BottomContainer>
      </div>
      </Desktop>
      ]
    );
  }
}
