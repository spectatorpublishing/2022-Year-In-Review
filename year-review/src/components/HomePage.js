import React, { Component } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Background from '../assets/homepg1500x800.png';
import whitemasthead from '../assets/whitemasthead.png';
import downarrow from '../assets/white-down-arrow-icon.png';
import FooterHome from './FooterHome.js';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';


// let HomePageImg= styled.div`
//     background-image: url(${({img_src}) => img_src});
//     height: 100vh;
//     width: 100%;
//     border: solid black 1px;
// `

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

let HomePageContainer= styled.div`
    background-image: url(${Background});
    background-size: cover;
    height: 100vh;
    width: 100%;
    border: solid black 1px;
    position: relative;
`;
let LeftDiv = styled.div`
	width: 50%;
	height: 65vh; 
	float: left;
  position: relative;
  top: 5vh;
  padding-left: 5vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

let LeftTitleDiv = styled.div`
	width: 70%;
	height: 60vh; 
  position: relative;
  top: 4vh;
`;

let YearDiv = styled.div`
  width: 100%;
	height: 8vh; 
  position: relative;
  top: 5vh;
  // display: flex;
  // justify-content: space-evenly;
  // align-items: flex-start;
`;

let Year = styled.h2`
  color: ${props => props.theme.white};
`;

let MobileYearDiv = styled.div`
  width: 100%;
	height: 5vh; 
  position: relative;
  top: 30vh;
`;

let MobileYear = styled.h2`
  color: ${props => props.theme.white};
  font-size: 5vh;
`;

let LeftTitle = styled.h1`
  color: ${props => props.theme.white};
`;

let MobileLeftTitleDiv = styled.div`
	width: 70%;
	height: 60vh; 
  position: relative;
  top: 30vh;
  display: flex;
`;

let MobileLeftTitle = styled.h1`
  color: ${props => props.theme.white};
  font-size: 10vh;
`;

let RightDiv = styled.div`
	width: 30%;
  height: 65vh;
	float: right;
  position: relative;
  top: 15vh;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: 5vw;
  margin-right: 5vw;
`;

let MobileRightDiv = styled.div`
	width: 10vw;
  height: 100vh;
	float: right;
  // position: relative;
  top: 1vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5vw;
  margin-right: 5vw;
`;

let MobileMenu = styled.div`
	width: 10vw;
  height: 100vh;
	float: right;
  // position: relative;
  background-color: grey;
  top: 1vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5vw;
  margin-right: 5vw;
`;


let SectionTitleDiv = styled.div`
  padding: 0.3rem;
`

let SectionTitle = styled.h3`
  color: ${props => props.theme.white};
  font-size: 5.5vh;
  
  &:hover {
    color: ${props => props.theme.blue};
    cursor: pointer;
  }
`;

const SpecLogo = styled.img`
  height: 25px;
  margin-top: 10vh;
`;

const MobileSpecLogo = styled.img`
  height: 15px;
  margin-top: 5vh;
`;

const DownArrow = styled.img`
  height: 40px;
`;

let HomePageContainer2= styled.div`
    // background-image: url(${Background});
    background-color: skyblue;
    background-size: cover;
    height: 100vh;
    width: 100%;
    border: solid black 1px;
    position: relative;
`;

let HamburgButton = styled.button`
  border: 1px solid black;
  align: right;
`;

// const Image = styled.div`
//   background-image: url(${({img_src}) => img_src});
// 	width: 150px;
// 	height: 150px;
// 	object-fit: cover;
// `
const Title = styled.h3`
	margin-top: -3px;
`;

export default class HomePage extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      [
      <React.Fragment>

        <MobileAndTablet>
          <MobileContainer>
            <HomePageContainer>
              <LeftDiv>
                <MobileSpecLogo src={whitemasthead}/>
                <MobileYearDiv>
                  <MobileYear>2018 - 2019</MobileYear>
                </MobileYearDiv>
                <MobileLeftTitleDiv>
                  <MobileLeftTitle>
                    YEAR IN REVIEW
                  </MobileLeftTitle>
                </MobileLeftTitleDiv>
              </LeftDiv>
            
            </HomePageContainer>
          </MobileContainer>
        </MobileAndTablet>

      <Desktop>
      <HomePageContainer>
          <LeftDiv>
            <SpecLogo src={whitemasthead}/>
            <YearDiv>
              <Year>2018 - 2019</Year>
            </YearDiv>
            <LeftTitleDiv>
              <LeftTitle>
                YEAR IN REVIEW
              </LeftTitle>
            </LeftTitleDiv>
          </LeftDiv>
          
          <RightDiv>
            <SectionTitleDiv><SectionTitle>NEWS</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>OPINION</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>THE EYE</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>PHOTO</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>DESIGN</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>SPORTS</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>A&amp;E</SectionTitle></SectionTitleDiv>
            <SectionTitleDiv><SectionTitle>SPECTRUM</SectionTitle></SectionTitleDiv>
            <DownArrow src={downarrow} />
          </RightDiv>
          
      </HomePageContainer>

      <HomePageContainer2>

      </HomePageContainer2>

      </Desktop>

      </React.Fragment>
      ]
    );
  }
}