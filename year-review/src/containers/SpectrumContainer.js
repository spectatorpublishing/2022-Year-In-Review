import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import SpectrumLayout from './SpectrumLayout';
import SpectrumTitle from '../components/SpectrumTitle'

class SpectrumContainer extends Component {
 
  render() { 
    return (
      <div>
          <SpectrumTitle title="SPECTRUM" description={this.props.data.blurb}/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <SpectrumLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </div>
    );
  }
}

export default SpectrumContainer;
