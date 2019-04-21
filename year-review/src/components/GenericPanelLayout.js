import React, { Component } from "react";
import styled from "styled-components";
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

let s1 = {
	width: '70%', 
	height: '100vh', 
	float: 'left',
	backgroundColor: 'skyblue'
}
let s2 = {
	width: '30%', 
	height: '100vh', 
	float: 'right',
	backgroundColor: 'grey'
}

let titleStyle = {
	textAlign: 'left',
	fontSize: '18px',
	marginLeft: '20px',
	marginRight: '20px'
}

let subtitleStyle = {
	textAlign: 'left',
	fontSize: '11px',
	marginLeft: '20px',
	marginRight: '20px'
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
  // constructor(props) {
  //   super(props);
  // }

  // handleWindowSizeChange = () => {
  //   this.setState({ width: window.innerWidth });
  // };

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <div style={containerStyle}>
        <div style={s1}>
        	<h1 style={titleStyle}>CONTROVERSIAL CUCR SPEAKERS DRAW MASSIVE PROTESTS, 
        	PROMPTING FREE SPEECH DEBATE</h1>
        	<p style={subtitleStyle}>After Columbia University College Republicans invited white nationalist 
        	speakers Mike Cernovich and Tommy Robinson to campus, hundreds of students 
        	reacted with outrage and organized protests, rallies, and marches against 
        	the speakers...</p></div>
        <div style={s2} />
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
