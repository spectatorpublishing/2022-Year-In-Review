import React, { Component } from 'react';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro';
import EditorLetter from '../components/EditorLetter';

const letter = "Dear readers,\
\n\nWhy does art matter to you?\
\n\nAs I’m writing this letter from self-isolation at home in Chicago, I’m finding that art plays an integral role in our lives now more than ever. When we were on campus, art connected us to our Columbia community, our broader community in West Harlem, our electrifying city, and people across the globe. Now, as we reinvent our routines amid a devastating global pandemic, art reminds us that beauty and innovation can be found in unexpected (virtual) places.\
\n\nAs I’m writing this letter from self-isolation at home in Chicago, I’m finding that art plays an integral role in our lives now more than ever. When we were on campus, art connected us to our Columbia community, our broader community in West Harlem, our electrifying city, and people across the globe. Now, as we reinvent our routines amid a devastating global pandemic, art reminds us that beauty and innovation can be found in unexpected (virtual) places.\
\n\nAs journalists, our goal is always to tap into something broader than a single story. From analyzing how Columbians practice sustainability in fashion to reporting on immersive art exhibits that grapple with the effects of climate change, we showed how art has a role to play in protecting our planet. If that’s not a universal story, then I don’t know what is.\
\n\nFrom paintings to plays to films, art is all about the representation of something—a story, a feeling, an identity. Art has also long been characterized by a dire lack of representation of many groups of people, including women, people of color, and queer people. Through our coverage, Arts & Entertainment aimed to confront the troubling legacy of exclusion in the art world. We looked critically at our stages and screens, in our art galleries and Core Curriculum required readings. We also looked behind the scenes to shed light on who gets to be a gatekeeper and to explore how we can push for equity.\
\n\nWhile Arts & Entertainment had previously covered local restaurants’ comings and goings, we strove this year to situate our Food & Drink coverage within a cultural context. From exploring Little Senegal to covering how local restaurants are coping amid the pandemic, we’ve hopefully given our readers a lot more to chew on than just food, although we encourage you to eat up.\
\n\nIf you needed convincing, we hope our coverage this year has shown you why the arts matter. If you were already convinced, we hope we’ve provided a place for you to learn about all the ways that art challenges us to imagine a better world, and how we can use art to connect with each other even when we’re apart from our community in the extraordinary sleepless city that we call home.";

class AEContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <PageIntro title="A&E" description={this.props.data.blurb} img_src={this.props.data.img}/>
        <EditorLetter letter={letter} author="Abby Rooney" role="Arts & Entertainment Editor"/>
        <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
      </React.Fragment>
    );
  }
}

export default AEContainer;
