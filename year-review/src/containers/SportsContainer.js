import React, { Component } from 'react';

import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro'

const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

class SportsContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="SPORTS" description={this.props.data.blurb} img_src={img_src}/>
          <SportsSlideShow data = {this.props.data.items} />
      </React.Fragment>
      
    );
  }
}

export default SportsContainer;
