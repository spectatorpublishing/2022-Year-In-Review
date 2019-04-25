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
`

let BackImg = styled.img`
  height: 100vh;
  width: 100%;
  opacity: .5;
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