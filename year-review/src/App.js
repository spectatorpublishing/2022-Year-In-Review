import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router'
import { ThemeProvider } from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import { GlobalStyles, Theme } from "./util/GlobalStyles";

import HomeContainer from './containers/HomeContainer'
import NewsContainer from './containers/NewsContainer'
import PhotoContainer from './containers/PhotoContainer'
import OpinionContainer from './containers/OpinionContainer'
import SportsContainer from './containers/SportsContainer'
import EyeContainer from './containers/EyeContainer'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer'
import ExpandingColumns from './components/ExpandingColumns'
import PhotoEssayBox from './components/PhotoEssayBox'
import { test_img } from "./util/TestData";
import { photo_data, opinion_data, NewsTestData, sports_slider_data } from './util/TestData'
import { NavItems } from "./util/NavItems";

class App extends Component {

  render() {
    const home = () => <HomeContainer />
    const news = () => <NewsContainer NavItems = {NewsTestData.sections} SliderData = { NewsTestData.image_and_text } intro_img = {test_img} />
    const opinion = () => <OpinionContainer />
    const eye = () => <EyeContainer />
    const photo = () => <PhotoEssayBox data = {photo_data} />
    const design = () => <h1 style={{color: "white"}}> Design </h1>
    const sports = () => <SportsContainer NavItems = {NavItems} SportsData = {sports_slider_data} />
    const ane = () => <h1 style={{color: "white"}}> A&amp;E </h1>
    const spectrum = () => <h1 style={{color: "white"}}> Spectrum </h1>

    const opeds = () => <h1 style={{color: "white"}}> Op-Eds </h1>
    const column = () => <h1 style={{color: "white"}}>  Column </h1>
    const love = () => <h1 style={{color: "white"}}>  Love Actualized </h1>
    const debate = () => <h1 style={{color: "white"}}>  Discourse and Debate </h1>

    return (
      <ThemeProvider theme={Theme}>
        <main>
          <GlobalStyles />
            <React.Fragment>
              <Desktop>
                {this.props.location.pathname == "/" ?
                  <NavBar menuItems={NavItems} transparent hideCrown/>
                :
                  <NavBar menuItems={NavItems} />
                }
              </Desktop>
              <MobileAndTablet>
                <NavBar menuItems={NavItems} transparent/>
              </MobileAndTablet>
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
              <Footer />
            </React.Fragment>
        </main>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);


