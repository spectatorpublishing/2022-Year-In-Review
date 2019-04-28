import React from 'react'
import styled from 'styled-components'
import Background from '../assets/homepg1500x800.png';

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
  color: white;
`

let LeftTitle = styled.h1`
  color: white;
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
              Year in Review
            </LeftTitle>
          </LeftTitleDiv>
        </LeftDiv>
        
        <RightDiv>

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