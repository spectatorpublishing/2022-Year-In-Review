import React, { Component } from 'react';
import styled from 'styled-components';
import scroll from '../assets/scroll.svg';

let TempTitle = styled.h1`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
  position: relative;
  font-size: 12em;
  margin-top: 0.7em;
`

let TempHeader = styled.div`
  height: 95vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-image: url(${props => props.img_src});
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

const TitleBlurb = styled.p`
  font-size: 20px;
  font-weight: 25;
  margin-left: 50px;
  margin-right: 50px;
  color: white;
  margin-top: 18em;
  text-align: center;
  z-index: 2;
  position: relative;
`;


class PageIntro extends Component {

  constructor() {
      super()
  }

  render() {
    return (
      <React.Fragment>
        <TempHeader {...this.props}>
          <TempTitle>{this.props.title}</TempTitle>
          <TitleBlurb>
              {this.props.description}
          </TitleBlurb>
        </TempHeader>
      </React.Fragment>
    );
  }
}

export default PageIntro;
