import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'

class AEContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <PageIntro title="A&E" description={this.props.data.blurb} img_src={this.props.data.img}/>
        <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </React.Fragment>
    );
  }
}

export default AEContainer;
