import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Theme } from "./util/GlobalStyles";
import { NavItems } from "./util/NavItems";
import NewsTestData from "./util/NewsTestData";

import NavBar from './components/Navigation/NavBar.js';
import ScrollingNavBar from './components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './components/GenericPanelLayout';
import SportsSlideShow from './containers/SportsSlideShow'
import PageIntro from './components/PageIntro'
import ScrollArrow from './components/ScrollArrow'

const test_img = "https://placekitten.com/301/301"
const test_url = "http://cs.columbia.edu"

class App extends Component {

  render() {
    return (
      <MemoryRouter initialEntries={['/']}>
      <div>
        <PageIntro title1="News" text1="blurb" title2="title" text2="blurb" img_src={test_img} />
        <ScrollingNavBar menuItems={NavItems}>
          <div style={{backgroundColor: "red", width: "100vw", height: "100vh",}}></div>
          <div style={{backgroundColor: "orange", width: "100vw", height: "100vh",}}></div>
          <div style={{backgroundColor: "yellow", width: "100vw", height: "100vh",}}></div>
          <div style={{backgroundColor: "green", width: "100vw", height: "100vh",}}></div>
          <div style={{backgroundColor: "blue", width: "100vw", height: "100vh",}}></div>
          <div style={{backgroundColor: "indigo", width: "100vw", height: "100vh",}}></div>
          <div style={{backgroundColor: "purple", width: "100vw", height: "100vh",}}></div>
        </ScrollingNavBar>
        
      </div>
      </MemoryRouter>
      
    );
  }
}

export default App;
