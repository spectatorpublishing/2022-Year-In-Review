import React, { Component } from 'react';
import styled from 'styled-components';

let TempTitle = styled.h1`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
  position: absolute;
  font-size: 12em;
`

let TempHeader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80");
  background-position: center;
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);

  &::after {
    content: "";
    background: ${props => props.theme.indigo};
    opacity: 0.3;
    height: 100vh;
    width: 100vw;
    position: absolute;
  }
`

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

class EyeContainer extends Component {

  constructor() {
      super()
  }

  render() {
    return (
      <React.Fragment>
        <TempHeader>
          <TempTitle>THE EYE</TempTitle>
          <TitleBlurb>
              Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books.
              As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests.
          </TitleBlurb>
        </TempHeader>
        <LetterContain> 
            <TempLetter> LETTER FROM THE EDITOR </TempLetter>
        </LetterContain>
      </React.Fragment>
    );
  }
}

export default EyeContainer;
