import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Background from '../assets/homepg1500x800.png'
import whitemasthead from '../assets/whitemasthead.png'

// let HomePageImg= styled.div`
//     background-image: url(${({img_src}) => img_src});
//     height: 100vh;
//     width: 100%;
//     border: solid black 1px;
// `

let HomePageContainer= styled.div`
    background-image: url(${Background});
    background-size: cover;
    height: 100vh;
    width: 100%;
    border: solid black 1px;
    z-index: -1;
    position: relative;
`
let LeftDiv = styled.div`
	width: 60%;
	height: 65vh; 
	float: left;
  background-color: skyblue;
  position: relative;
  top: 15vh;
`

let LeftTitleDiv = styled.div`
	width: 100%;
	height: 50vh; 
  background-color: skyblue;
  position: relative;
  top: 15vh;
  border: 1px solid black;
`

let YearDiv = styled.div`
  width: 100%;
	height: 15vh; 
	float: left;
  background-color: none;
  position: relative;
  border: 1px solid black;
`

let Year = styled.h2`
  color: ${props => props.theme.white};
  &:hover {
    color: color: ${props => props.theme.blue};
  }
`

let LeftTitle = styled.h1`
  color: ${props => props.theme.white};
`

let RightDiv = styled.div`
	width: 35%;
  height: 65vh;
	float: right;
  background-color: grey;
  position: relative;
  top: 15vh;
  border: 1px solid black;
`

let SectionTitleDiv = styled.div`
  padding: 0.3rem;
  margin: 1.5rem;
`

let SectionTitle = styled.h3`
  color: ${props => props.theme.white};
`

// const Image = styled.div`
//   background-image: url(${({img_src}) => img_src});
// 	width: 150px;
// 	height: 150px;
// 	object-fit: cover;
// `
const Title = styled.h3`
	margin-top: -3px;
`

const homePage = (props) =>{
  return (
    <HomePageContainer>
        <LeftDiv>
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
        </RightDiv>
        
    </HomePageContainer>
  );
}

export default homePage;


// export default class HomePage extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = { };
//     }
  
//     render() {
//       return (
//         <HomePageImg>
//         </HomePageImg>
//       );
//     }
//   }