import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Theme } from "./util/GlobalStyles";

import NewsContainer from './containers/NewsContainer'
import PhotoContainer from './containers/PhotoContainer'
import OpinionContainer from './containers/OpinionContainer'
import SportsContainer from './containers/SportsContainer'
import NavBar from './components/Navigation/NavBar'
import ExpandingColumns from './components/ExpandingColumns'
import PhotoEssayBox from './components/PhotoEssayBox'
import { test_img } from "./util/TestData";
import { photo_data, opinion_data, NewsTestData, sports_slider_data } from './util/TestData'
import { NavItems } from "./util/NavItems";

class App extends Component {

  render() {
    const home = () => <h1> Home </h1>
    const news = () => <NewsContainer NavItems = {NewsTestData.sections} SliderData = { NewsTestData.image_and_text } intro_img = {test_img} />
    const opinion = () => <OpinionContainer />
    const eye = () => <h1> Eye </h1>
    const photo = () => <PhotoEssayBox data = {photo_data} />
    const design = () => <h1> Design </h1>
    const sports = () => <SportsContainer NavItems = {NavItems} SportsData = {sports_slider_data} />
    const ane = () => <h1> A&E </h1>
    const spectrum = () => <h1> Spectrum </h1>

    const opeds = () => <h1> Op-Eds </h1>
    const column = () => <h1>  Column </h1>
    const love = () => <h1>  Love Actualized </h1>
    const debate = () => <h1>  Discourse and Debate </h1>

    return (
      <ThemeProvider theme={Theme}>
        <main>
          <GlobalStyles />
            <React.Fragment>
              <NavBar menuItems={NavItems} />
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/news" component={news} />
                <Route exact path="/opinion" component={opinion} />
                <Route exact path="/opinion/column" component={column} />
                <Route exact path="/opinion/opeds" component={opeds} />
                <Route exact path="/opinion/love-actualized" component={love} />
                <Route exact path="/opinion/discourse-and-debate" component={debate} />
                <Route exact path="/eye" component={eye} />
                <Route exact path="/photo" component={photo} />
                <Route exact path="/design" component={design} />
                <Route exact path="/sports" component={sports} />
                <Route exact path="/arts-and-entertainment" component={ane} />
                <Route exact path="/spectrum" component={spectrum} />
              </Switch>
            </React.Fragment>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;


