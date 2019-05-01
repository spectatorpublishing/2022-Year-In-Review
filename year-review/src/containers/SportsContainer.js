import React, { Component } from 'react';

import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro'


class SportsContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <PageIntro title1="Sports" text1="blurb" title2="title" text2="blurb" img_src={this.props.intro_img} />
          

            <SportsSlideShow data = {this.props.SportsData} />

          
        </div>
      </React.Fragment>
      
    );
  }
}

export default SportsContainer;
