import React, { Component } from 'react';
import { MemoryRouter } from 'react-router';

import SportsSlideShow from './SportsSlideShow';
import PageIntro from '../components/PageIntro'


class SportsContainer extends Component {

  render() {
    return (
      <MemoryRouter initialEntries={['/']}>
      <div>
        <PageIntro title1="Sports" text1="blurb" title2="title" text2="blurb" img_src={this.props.intro_img} />
        

          <SportsSlideShow data = {this.props.SportsData} />

        
      </div>
      </MemoryRouter>
      
    );
  }
}

export default SportsContainer;
