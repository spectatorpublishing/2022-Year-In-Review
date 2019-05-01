import React, { Component } from 'react';
import ExpandingColumns from '../components/ExpandingColumns';
import styled from 'styled-components';

import { opinion_data } from '../util/OpinionData'

let TempTitle = styled.h1`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  z-index: 2;
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

  &::after {
    content: "";
    background: black;
    opacity: 0.3;
    height: 100vh;
    width: 100vw;
    position: absolute;
  }
`

let TempLetter = styled.h2`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.indigo};
`

export default class OpinionContainer extends Component {
  render() {
    return (
      <React.Fragment>
          <TempHeader>
            <TempTitle>OPINION</TempTitle>
          </TempHeader>

          <TempLetter> LETTER FROM THE EDITOR </TempLetter>
          <ExpandingColumns data = {opinion_data}/>
      </React.Fragment>
    );
  }
}
