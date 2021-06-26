import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

let ParagraphBr = styled.br`
  /* line-height: 22px; */
`

let Paragraph = styled.p`
  /* line-height: 22px; */
`

let A = styled.a`
  color: ${props => props.theme.white};
  text-decoration-color: ${props => props.theme.blue};

  &:hover {
    color: ${props => props.theme.blue};
  }
  &:focus {
    color: ${props => props.theme.blue};
  }
  &:active {
    color: ${props => props.theme.blue};
  }
`



class EyeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <PageIntro title="THE EYE" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default EyeContainer;
