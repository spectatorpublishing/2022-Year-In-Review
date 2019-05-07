import React, { Component } from 'react';

import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro'

class SportsContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="SPORTS" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <SportsSlideShow data = {this.props.data.items} />
      </React.Fragment>
      
    );
  }
}

export default SportsContainer;
