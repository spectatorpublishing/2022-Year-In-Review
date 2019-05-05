import React, { Component } from 'react';
import styled from 'styled-components';

let LetterContain = styled.div`
  height: 150vh;
  width: 100vw;
  margin-top: 5vw;
  margin-left: 10vw;
`

let TempLetter = styled.h1`
  height: 100vh;
  width: 80vw;
  color: ${props => props.theme.white};
  display: flex;
  align-text: justify;
  background-color: ${props => props.theme.indigo};
  align-items: left;
  margin-right: 10vw;
  font-size: 10em;
`

const TitleBlurb = styled.p`
  font-size: 20px;
  font-weight: 25;
  margin-left: 50px;
  margin-right: 50px;
  color: white;
  margin-top: 30vh;
  text-align: center;
  z-index: 2;
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
        </LetterContain>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
