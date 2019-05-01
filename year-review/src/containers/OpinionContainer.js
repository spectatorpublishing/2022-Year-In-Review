import React, { Component } from 'react';
import ExpandingColumns from '../components/ExpandingColumns';

import { opinion_data } from '../util/OpinionData'

export default class OpinionContainer extends Component {
  render() {
    return (
      <React.Fragment>
          <ExpandingColumns data = {opinion_data}/>
      </React.Fragment>
    );
  }
}
