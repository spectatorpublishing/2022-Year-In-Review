import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import SpectrumLayout from './SpectrumLayout';
import SpectrumTitle from '../components/SpectrumTitle'
import EditorLetter from '../components/EditorLetter';

const letter = "Columbia and New York City become less and less difficult and confusing to navigate each year, but balancing academics, extracurriculars, and everything else in the city that never sleeps is never easy. The Columbia experience is ever-changing and filled with turns and surprises. To be able to find comfort and ease in the changes, and to build community within the memories and experiences we share, is something the Spectrum team hopes to accomplish with the work we dedicate ourselves to every day.\
\n\nWhether it’s course registration, housing selection, midterms season, or the internship hunt, we hope to help you find the resources you need, hit the right deadlines, and keep an open mind when things are looking a bit hectic and overwhelming. Whether it’s Thanksgiving, Valentine’s, or summer, we hope you are celebrating it with loved ones, embracing these occasions of your lives with full hearts, and making every day your day. And lastly, whether it’s love and relationships, mental health, or general lifestyle, we hope you are choosing what makes you happy and empowered, and never feel that you are alone.\
\n\nBetween the spectrum of experiences, stories, narratives, and struggles we all hold, we hope that we have been unifying, comforting, and easy company this past year.\
\n\nCheers to the next,"
class SpectrumContainer extends Component {
 
  render() { 
    return (
      <div>
          <SpectrumTitle title="SPECTRUM" description={this.props.data.blurb}/>
          <EditorLetter letter={letter} author="Grace Yiran Lin" role="Spectrum Editor"/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <SpectrumLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </div>
    );
  }
}

export default SpectrumContainer;
