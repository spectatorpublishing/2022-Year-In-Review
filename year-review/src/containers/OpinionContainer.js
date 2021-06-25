import React, { Component } from 'react';

import ExpandingColumns from '../components/ExpandingColumns';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'
import PhotoGrid from '../components/PhotoGrid';
import { opinion_sections } from '../util/OpinionData'

const letter = "Growing used to the new online normal, Columbia students have responded with resilience. Those of us on the editorial team have seen our community grow and adapt to these new challenges in stride. While it would have been possible and understandable for contributors to turn inward and lament about their own problems, we have instead seen a zeal for equity that has only been highlighted by the pandemic. This year’s work proves that nothing can stop the members of the Columbia community from lifting each other up, and we hope you too can experience this as you read through our op-eds, columns, and cartoons."


export default class OpinionContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="OPINION" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <EditorLetter letter={letter} author="Ryan Oden" role="Editorial Page Editor"/>

          <ExpandingColumns data = {opinion_sections}/>
          <ScrollingNavBar menuItems={opinion_sections}>
            <div>
              <GenericPanelLayout data={this.props.data.items[0]} />
            </div>
            {/* <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div> */}
            <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div>
            <div>
              <div style={{"height":"5vh"}}></div>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>Columns</h3>
              <PhotoGrid data={this.props.data.items[2].items} flip />
            </div>
          </ScrollingNavBar>
      </React.Fragment>
    );
  }
}
