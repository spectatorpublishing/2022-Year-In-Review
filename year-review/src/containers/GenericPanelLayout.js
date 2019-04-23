import React, { Component } from "react";
import styled from "styled-components";
import ImageBoxSlider from './ImageBoxSlider';
import NavBar from '../components/Navigation/NavBar';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import fillerImg from '../assets/dawg.png'
import blueicon from '../assets/blueicon.png'
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
// `

let containerStyle = {
	// float: 'right'
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'stretch'
}

let LeftSideContainer = styled.div`
	width: 70%;
	height: 100vh; 
	float: left;
	background-color: skyblue;
`

let RightSideContainer = styled.div`
	width: 30%;
	height: 100vh;
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
let Icon = styled.img`
  height: 7vw;
  width: 7vw;
  position: absolute;
  left: 66.5%;
  top: 20%;
  z-index: 5;
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
        <BrowserRouter> 
          <NavBar menuItems = {this.props.menuItems}></NavBar>
        </BrowserRouter>

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
        <Icon src={blueicon}></Icon>
        <RightSideContainer>
          <SideImg src = {fillerImg}></SideImg>
        </RightSideContainer>
      </div>
    );
  }

  // render() {
  //   return (
  //     // Try setting `flexDirection` to `column`.
  //     <div style={{flex: 1, flexDirection: 'column'}}>
	 //      <div style={whiteSpaceStyle} />
	 //      <div style={imgStyle} />
  //     </div>
  //   );
  // }

  // render() {


    // let whiteSPace = [
    //   ["Location", this.props.location],
    //   ["Room types", this.props.roomtype],
    //   ["Class makeup", classMakeupFormat]
    // ];

    // glanceMap = glanceMap.concat(this.props.lottery);

    // const AtAGlanceMapped = glanceMap.map((el, i) => {
    //   if (el[1] && el[1] != "" && el[1] != "0" && el[1] != " ") {
    //     return (
    //       <Table key={i}>
    //         <Category>{el[0]}</Category>
    //         <Content>
    //           <b>{el[1]}</b>
    //         </Content>
    //       </Table>
    //     );
    //   } else return <div key={i} />;
    // });

    // return (
    //   <Wrapper>
    //     <Title> At a glance </Title>
    //     {AtAGlanceMapped}
    //     <br />
    //   </Wrapper>
    // );
  // }
}
