import React from 'react';
import styled from 'styled-components'
import arrow from '../assets/white-down-arrow-icon.png'

const Arrow = styled.img`
  width: 5vw;
  z-index: 1;
  position: fixed;
  left: 90%;
  bottom: ${props => props.mobile ? '5vh' : '10vh'};
  transform: rotate(180deg);
`

export default class ScrollArrow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 48 && !this.state.visible) {
      this.setState({visible: true});
    }
    if (window.scrollY <= 48 && this.state.visible) {
      this.setState({visible: false});
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return [this.state.visible && <Arrow src={arrow} onClick={this.scrollToTop}/>]
  }
}