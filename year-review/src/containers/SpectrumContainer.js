import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import SpectrumLayout from './SpectrumLayout';
import SpectrumTitle from '../components/SpectrumTitle'
import EditorLetter from '../components/EditorLetter';

const letter = `
We write for you as one of you. We write for the incoming freshman, apprehensive about the logistics of leaving home and 
stepping foot on our Morningside Heights campus. We write for the questioning sophomore looking for a nudge in the right 
direction, for class recommendations and study spots. We write for the junior in need of a fun and quick quiz to take their 
mind off of an incoming final or interview, a reprieve from their routine. We write for the senior, worried about jumping 
into adulthood and leaving their undergraduate home behind, with advice gathered from alumni or administration.

Despite our differences, we all have one thing in common—a want to find ourselves in the present and to forge the right path 
for our future. Our section comes together from a spectrum of experiences to become a big sibling for students at Barnumbia. 
Whether it’s helping you make friends during NSOP, find a study spot during finals, or figure out how to ace that next 
interview, Spectrum hopes to bring service journalism to our audience every step of the way.

Despite the challenges we’ve faced throughout a virtual and hybrid academic year, our members have kept high spirits and 
engaging ideas in hopes of making a difference in their community. With a return to normalcy on the horizon, we’re excited 
to take what we’ve learned during our time apart to create new content for students, by students.`;

class SpectrumContainer extends Component {
 
  render() { 
    return (
      <div>
          <SpectrumTitle title="SPECTRUM" description={this.props.data.blurb}/>
          <EditorLetter letter={letter} author="Jane Mok and Ariana Novo" role="Deputy Spectrum Editors"/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <SpectrumLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </div>
    );
  }
}

export default SpectrumContainer;
