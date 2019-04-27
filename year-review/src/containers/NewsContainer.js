import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Theme } from "../util/GlobalStyles";

import ReactFullpage from '@fullpage/react-fullpage'

import NavBar from '../components/Navigation/NavBar.js';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'


class NewsContainer extends Component {

  render() {
    return (
      <MemoryRouter initialEntries={['/']}>
      <div>
        <PageIntro title1="News" text1="blurb" title2="title" text2="blurb" img_src={this.props.intro_img} />
        
        <ScrollingNavBar menuItems={this.props.NavItems}>
          {this.props.SliderData.map((data, i) => 
            <GenericPanelLayout key={i} data = {this.props.SliderData[i]} />)}
        </ScrollingNavBar>
        
      </div>
      </MemoryRouter>
      
    );
  }
}

export default NewsContainer;
