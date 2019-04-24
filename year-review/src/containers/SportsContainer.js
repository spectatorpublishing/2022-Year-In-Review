import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Theme } from "../util/GlobalStyles";

import NavBar from '../components/Navigation/NavBar.js';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro'


class SportsContainer extends Component {

  render() {
    return (
      <MemoryRouter initialEntries={['/']}>
      <div>
        <PageIntro title1="Sports" text1="blurb" title2="title" text2="blurb" img_src={this.props.intro_img} />
        

          <SportsSlideShow data = {this.props.SportsData} />

        
      </div>
      </MemoryRouter>
      
    );
  }
}

export default SportsContainer;
