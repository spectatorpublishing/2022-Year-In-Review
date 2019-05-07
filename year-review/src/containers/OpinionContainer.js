import React, { Component } from 'react';
import styled from 'styled-components';

import ExpandingColumns from '../components/ExpandingColumns';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'
import PhotoGrid from '../components/PhotoGrid';
import { opinion_sections } from '../util/OpinionData'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

const LogoWrapper = styled.div`
  position: sticky;
  top: 120px;
  height: 0;
  z-index: 10;

`

const Logo = styled.h6`
  background-color: #494949;
  opacity: 0.8;
  display: inline-block;
  margin-left: 30px;
  padding: 10px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
`

export default class OpinionContainer extends Component {

  render() {
    return (
      <React.Fragment>
          <PageIntro title="OPINION" description={this.props.data.blurb} img_src={img_src}/>
          <EditorLetter/>

          <ExpandingColumns data = {opinion_sections}/>
          <ScrollingNavBar menuItems={opinion_sections}>
            <div>
              <GenericPanelLayout data={this.props.data.items[0]} />
            </div>
            <div>
              <GenericPanelLayout data={this.props.data.items[1]} />
            </div>
            <div>
              <GenericPanelLayout data={this.props.data.items[2]} />
            </div>
            <div>
              <h3 style={{"height":"5vh"}}></h3>
              <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}>Column</h3>
              <PhotoGrid data={this.props.data.items[3].items} flip />
            </div>
          </ScrollingNavBar>
      </React.Fragment>
    );
  }
}
