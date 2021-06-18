import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'

class SportsContainer extends Component {

  constructor() {
      super()
      this.handleWheel = this.handleWheel.bind(this)
  }

  handleWheel(e){
  
  }

  render() {
    //
        
    return (
      <React.Fragment>
        <div onWheel = {this.handleWheel}>
          <PageIntro title="SPORTS" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default SportsContainer;
