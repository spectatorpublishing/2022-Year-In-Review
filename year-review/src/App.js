import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router'
import { ThemeProvider } from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import { GlobalStyles, Theme } from "./util/GlobalStyles";

import HomeContainer from './containers/HomeContainer'
import NewsContainer from './containers/NewsContainer'
import OpinionContainer from './containers/OpinionContainer'
import SportsContainer from './containers/SportsContainer'
import EyeContainer from './containers/EyeContainer'
import PhotoContainer from './containers/PhotoContainer'
import DesignContainer from './containers/DesignContainer'
import AEContainer from './containers/AEContainer'
import SpectrumContainer from './containers/SpectrumContainer'

import NavBar from './components/Navigation/NavBar' 
import Footer from './components/Footer'

import { test_img } from "./util/TestData";
import data from './util/GlobalArticleData'
import { NavItems, NavItemsWithHome } from "./util/NavItems";

class App extends Component {

  render() {
    const home = () => <HomeContainer /> 
    const news = () => <NewsContainer data = {data.News} />
    const opinion = () => <OpinionContainer data={data.Opinion}/>
    const eye = () => <EyeContainer data = {data.Eye}/>
    const photo = () => <PhotoContainer data = {data.Photos}/>
    const design = () => <DesignContainer data = {data.Design} />
    const sports = () => <SportsContainer data = {data.Sports} />
    const ane = () => <AEContainer data = {data["A&E"]}/>
    const spectrum = () => <SpectrumContainer data = {data.Spectrum} />

    return (
      <ThemeProvider theme={Theme}>
        <main>
          <GlobalStyles />
            <React.Fragment>
              <Desktop>
                {this.props.location.pathname === "/2018-year-review" ?
                  <NavBar menuItems={NavItems} transparent hideCrown/>
                :
                  <NavBar menuItems={NavItems} />
                }
              </Desktop>
              <MobileAndTablet>
                <NavBar menuItems={NavItemsWithHome} transparent/>
              </MobileAndTablet>
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/2018-year-review" component={home} />
                <Route exact path="/2018-year-review/news" component={news} />
                <Route exact path="/2018-year-review/opinion" component={opinion} />
                <Route exact path="/2018-year-review/eye" component={eye} />
                <Route exact path="/2018-year-review/photo" component={photo} />
                <Route exact path="/2018-year-review/design" component={design} />
                <Route exact path="/2018-year-review/sports" component={sports} />
                <Route exact path="/2018-year-review/arts-and-entertainment" component={ane} />
                <Route exact path="/2018-year-review/spectrum" component={spectrum} />
              </Switch>
              <Footer />
            </React.Fragment>
        </main>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);


