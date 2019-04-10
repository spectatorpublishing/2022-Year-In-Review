import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavigationItems from './Component/Navigation/NavigationItems'
import Test from './Component/Test'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
 		
        <Switch>
          <Route path='/home' component={Test}/>  
          <Route path='/news' component={Test}/>  
          <Route path='/opinion' component={Test}/> 
          <Route path='/eye' component={Test}/> 
          <Route path='/' exact component={Test}/>
        </Switch>
        <NavigationItems/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
