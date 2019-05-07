import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const LogoWrapper = styled.div`
  position: sticky;
  top: 120px;
  height: 0;
  z-index: 10;

`

const Logo = styled.h6`
  background-color: #494949;
  opacity: 0.8;
  display: inline-block;
  margin-left: 30px;
  padding: 10px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
`

class Button extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.history.push("/")
  }

  render() {
    return (
          <LogoWrapper><Logo onClick = {this.handleClick}>Year in Review</Logo></LogoWrapper>
          
    );
  }
}

export default withRouter(Button);