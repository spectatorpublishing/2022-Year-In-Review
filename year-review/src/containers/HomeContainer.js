import React, { Component } from 'react';
import styled from 'styled-components';
import HomePage from '../components/HomePage.js';
import ScrollingNavBar from "../components/Navigation/ScrollingNavBar.js";
import FooterHome from '../components/FooterHome'
import ReaderLetter from '../components/ReaderLetter'
import { NavItems } from "../util/NavItems.js";

export default class HomeContainer extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <React.Fragment>
          <HomePage menuItems={NavItems} />
          <ReaderLetter/>
          <ScrollingNavBar menuItems={NavItems} noContent />
          <FooterHome/>
      </React.Fragment>
    );
  }
}
