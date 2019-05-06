import React, { Component } from 'react';
import styled from 'styled-components';

let LetterContain = styled.div`
  height: 150vh;
  width: 100%;
  // margin-top: 5vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`

let TempLetter = styled.h1`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: ${props => props.theme.white};
  display: flex;
  align-text: justify;
  background-color: ${props => props.theme.indigo};
  align-items: left;
  margin-right: 10vw;
  font-size: 8em;
  position: relative;
`

const TitleBlurb = styled.p`
  font-size: .9em;
  font-weight: 25;
  width: 80%;
  // margin-left: 5vw;
  // margin-right: 5vw;
  color: white;
  // margin-top: 5vh;
  text-align: left;
  z-index: 2;
  position: relative;
  white-space: pre-line;
`;

class EditorLetter extends Component {

  constructor() {
      super()
  }

  render() {
    return (
      <React.Fragment>
        <LetterContain> 
            <TempLetter> LETTER FROM THE EDITOR </TempLetter>
            <TitleBlurb>{this.props.letter}</TitleBlurb>
        </LetterContain>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
