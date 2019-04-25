import React from 'react'
import styled from 'styled-components'

// let HomePageImg= styled.div`
//     background-image: url(${({img_src}) => img_src});
//     height: 100vh;
//     width: 100%;
//     border: solid black 1px;
// `

let HomePageContainer= styled.div`
    background-color: skyblue;
    height: 100vh;
    width: 100%;
    border: solid black 1px;
    z-index: -1;
`

let BackImg = styled.img`
  height: 100vh;
  width: 100%;
  opacity: .5;
  z-index: -1;
`
let LeftTitle = styled.div`
	width: 60%;
	height: 70vh; 
	float: left;
    background-color: skyblue;
    position: absolute;
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
        <BackImg src={props.img_src} />
        <LeftTitle>HI </LeftTitle>
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