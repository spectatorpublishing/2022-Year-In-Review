import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Theme } from "./util/GlobalStyles";

import NewsContainer from './containers/NewsContainer'
import SportsContainer from './containers/SportsContainer'
import NavBar from './components/Navigation/NavBar'

import { test_img } from "./util/TestData";
import { NewsTestData, sports_slider_data } from './util/TestData'
import { NavItems } from "./util/NavItems";

class App extends Component {

  render() {
    const home = () => <h1> Home </h1>
    const news = () => <NewsContainer NavItems = {NavItems} SliderData = { NewsTestData }
          intro_img = {test_img} />
    const opinion = () => <h1> Opinions </h1>
    const eye = () => <h1> Eye </h1>
    const photo = () => <h1> Photo </h1>
    const design = () => <h1> Design </h1>
    const sports = () => <SportsContainer NavItems = {NavItems} SportsData = {sports_slider_data} />
    const ane = () => <h1> A&E </h1>
    const oped = () => <h1> Op_ed </h1>
    const column = () => <h1>  column </h1>
    const love = () => <h1>  love </h1>
    const debate = () => <h1>  debate </h1>

    return (
      <div>
        <MemoryRouter>
          <NavBar menuItems={NavItems} fixed />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/news" component={news} />
            <Route exact path="/opinion" component={opinion} />
            <Route exact path="/eye" component={eye} />
            <Route exact path="/photo" component={photo} />
            <Route exact path="/design" component={design} />
            <Route exact path="/sports" component={sports} />
            <Route exact path="/arts-and-entertainment" component={ane} />
            <Route exact path="/oped" component={oped} />
            <Route exact path="/column" component={column} />
            <Route exact path="/love-actualized" component={love} />
            <Route exact path="/discourse-and-debate" component={debate} />
          </Switch>

        </MemoryRouter>
      </div>
      
      
    );
  }
}

export default App;


