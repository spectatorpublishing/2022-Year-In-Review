import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro';
import EditorLetter from '../components/EditorLetter';

const letter = `Dear readers,

Over the past year, the confines of art have been broken down and tossed out the window. Could anyone have imagined that Columbia’s dance groups would spend hours editing together footage of dancers scattered across the globe? That tickets to a Broadway show would become a virtual pass into a Zoom theater production? That chat boxes would replace clapping and shouting during concerts?

Art is creative expression. Art is adaptability. Art is passion. Art is, I guess, a bunch of little Zoom squares.

Although many students never stepped foot on campus last year, the arts blossomed. While some took a hiatus in preparation for the return to in-person instruction, most groups worked around the obvious challenge and created shows, concerts, exhibitions, and films from their laptops. While only a fraction of students lived on campus this year, arts groups worked through the isolation and came together to connect the Columbia community. Many students took this time to record albums, launch fashion brands, start video blogs, and create literary publications. Others transformed their living rooms into dance studios, bedrooms into art labs, and dorm kitchens into gourmet facilities. The arts are not dead, and they will never die.

Arts & Entertainment documented many of these stories and gave readers an opportunity to learn about and engage with the arts on and around campus. Writers have been hard at work profiling emerging artists and providing in-depth coverage of student-led productions. Beyond these local topics, Arts & Entertainment took this time to investigate and question systemic issues within the broader arts community, looking to shed light on problems that the pandemic and racial unrest exacerbated.

Through long-form stories, Arts & Entertainment examined gender inequity in the film industry, Columbia’s role in the development of hip-hop, and the evolving Core Curriculum. Our writers highlighted stories of women, people of color, and LGBTQ people who have historically lacked a voice in the arts world. In addition, we covered issues of climate change, sexual harassment, and mental health in the arts, exploring how we as journalists and artists can push for equity.

Moreover, Arts & Entertainment analyzed the University’s relationship to the surrounding area by investigating issues such as food gentrification, income and resource disparity, and efforts to protect neighborhood culture. We expanded coverage into Harlem by exploring food insecurity, art and its role in preserving history, and fashion as an expression of identity. Through archival work, writers dug up secrets of the past that have had profound impacts on local communities, especially marginalized groups who have very rarely received media attention.

Someone had asked me at the beginning of the year how an arts section would even exist if there were no arts to cover. I told them that this was the best time to dig deeper and tell stories that revealed why the arts matter, especially when in-person performances halted. The arts ultimately became a means through which artists, from behind their laptops, could connect with each other and discover themselves.
`;

class AEContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <PageIntro title="A&E" description={this.props.data.blurb} img_src={this.props.data.img}/>
        <EditorLetter letter={letter} author="Noah Sheidlower" role="Arts & Entertainment Editor"/>
        <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </React.Fragment>
    );
  }
}

export default AEContainer;
