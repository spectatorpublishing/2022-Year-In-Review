import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

class EyeContainer extends Component {

  constructor() {
      super()
  }

  render() {
    return (
      <React.Fragment>
        <div onWheel = {this.handleWheel}>
          <PageIntro title="THE EYE" description={description} img_src={img_src}/>
          <EditorLetter/>
          <ScrollingNavBar menuItems={this.props.NavItems}>
            {this.props.SliderData.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.SliderData[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default EyeContainer;
