import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavigationItems from './Component/Navigation/NavigationItems'
import NavBar from './components/NavBar.js';
import Test from './Component/Test'
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./util/GlobalStyles";
import { NavItems } from "./util/NavItems";
import './index.css';

class App extends Component {
  

  render() {
    return (
    <BrowserRouter>
      <div>
 		
        <Switch>
          <Route exact path='/' component={Test}/>
          <Route exact path='/home' component={Test}/>  
          <Route exact path='/news' component={Test}/>  
          <Route exact path='/opinion' component={Test}/> 
          <Route exact path='/eye' component={Test}/> 
        </Switch>
        <NavigationItems/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
