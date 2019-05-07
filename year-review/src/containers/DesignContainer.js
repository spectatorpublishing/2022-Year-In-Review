import React, { Component } from 'react';
import styled from 'styled-components';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import Lightbox from '../components/Lightbox/Lightbox'
import ButtonToHome from '../components/ButtonToHome'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

let sampleMedia = [
	{
	  front_image: "https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
	  description: "Gran Vía (literally 'Great Way') is a street located in central Madrid, Spain. The street, sometimes referred to as the 'Spanish Broadway', is one of the city's most important shopping areas, with a large number of hotels and large movie theatres; however, in recent years, many of these theatres have been replaced by shopping centres. The Gran Vía serves as showcase of early 20th-century revival architecture, with architectural styles ranging from Vienna Secession style, Plateresque, Neo-Mudéjar, Art Deco, and others.",
	  link: "https://unsplash.com/photos/TAW3H-7NV5k",
	  author: "Alev Takil"
	},
	{
	  front_image: "https://images.unsplash.com/photo-1551899892-56314e56f2c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80",
	  title: "The Metropolis Building or Edificio Metrópolis on Gran Vía (Madrid)",
	  link: "https://unsplash.com/photos/bviR09mlwoU",
	  author: "Alberto Robledano"
	},
	{
	  front_image: "https://images.unsplash.com/photo-1509845350455-fb0c36048db1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	  description: "The Plaza Mayor (English: Main Square) is a major public space in the heart of Madrid, the capital of Spain. It was once the centre of Old Madrid. It was first built (1580–1619) during the Habsburg period of Philip III's reign. Only a few Spanish blocks away is another famous plaza, the Puerta del Sol. The Plaza Mayor is for the people of Madrid and tourists to shop, walk around, eat, and enjoy the outdoors.",
	  link: "https://unsplash.com/photos/OO0_7yJa-s0",
	  author: "Victor Garcia"
	},
	{
	  front_image: "https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
	  description: "Gran Vía (literally 'Great Way') is a street located in central Madrid, Spain. The street, sometimes referred to as the 'Spanish Broadway', is one of the city's most important shopping areas, with a large number of hotels and large movie theatres; however, in recent years, many of these theatres have been replaced by shopping centres. The Gran Vía serves as showcase of early 20th-century revival architecture, with architectural styles ranging from Vienna Secession style, Plateresque, Neo-Mudéjar, Art Deco, and others.",
	  link: "https://unsplash.com/photos/TAW3H-7NV5k",
	  author: "Alev Takil"
	},
	{
	  front_image: "https://images.unsplash.com/photo-1551899892-56314e56f2c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80",
	  title: "The Metropolis Building or Edificio Metrópolis on Gran Vía (Madrid)",
	  link: "https://unsplash.com/photos/bviR09mlwoU",
	  author: "Alberto Robledano"
	},
	{
	  front_image: "https://images.unsplash.com/photo-1509845350455-fb0c36048db1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	  description: "The Plaza Mayor (English: Main Square) is a major public space in the heart of Madrid, the capital of Spain. It was once the centre of Old Madrid. It was first built (1580–1619) during the Habsburg period of Philip III's reign. Only a few Spanish blocks away is another famous plaza, the Puerta del Sol. The Plaza Mayor is for the people of Madrid and tourists to shop, walk around, eat, and enjoy the outdoors.",
	  link: "https://unsplash.com/photos/OO0_7yJa-s0",
	  author: "Victor Garcia"
	}
];

class DesignContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			graphicsLightboxActive: false,
			illustrationsLightboxActive: false,
			lightboxIndex: 0
		}
		this.closeGraphicsLightbox = this.closeGraphicsLightbox.bind(this)
		this.openGraphicsLightbox = this.openGraphicsLightbox.bind(this)
		this.closeIllustrationsLightbox = this.closeIllustrationsLightbox.bind(this)
		this.openIllustrationsLightbox = this.openIllustrationsLightbox.bind(this)
	}
	closeIllustrationsLightbox(){
		this.setState({"illustrationsLightboxActive": false})
	}
	closeGraphicsLightbox(){
		this.setState({"graphicsLightboxActive": false})
	}
	openIllustrationsLightbox(i){
		this.setState({"illustrationsLightboxActive": true, "lightboxIndex": i})
	}
	openGraphicsLightbox(i){
		this.setState({"graphicsLightboxActive": true, "lightboxIndex": i})
	}

  render() {
    return (
      <React.Fragment>
      	<ButtonToHome />
        <PageIntro title="DESIGN" description={this.props.data.blurb} img_src={img_src}/>
        <ScrollingNavBar menuItems={this.props.data.sections}>
        <div>
	        <GenericPanelLayout data = {this.props.data.items[0]} />)}
    	</div>
    	<div>
	        <PhotoGrid data={this.props.data.items[1]} openLightbox={this.openGraphicsLightbox}/>
	    </div>
    	<div>
	        <PhotoGrid data={this.props.data.items[2]} openLightbox={this.openIllustrationsLightbox}/>
	     </div>
        </ScrollingNavBar>
				{this.state.illustrationsLightboxActive && <Lightbox
					index={this.state.lightboxIndex} 
					media={this.props.data.items[2]} 
					authorLabel="contributor"
					onClose={this.closeIllustrationsLightbox}>
				</Lightbox>}
				{this.state.graphicsLightboxActive && <Lightbox
					index={this.state.lightboxIndex} 
					media={this.props.data.items[1]} 
					authorLabel="contributor"
					onClose={this.closeGraphicsLightbox}>
				</Lightbox>}
      </React.Fragment>
    );
  }
}

export default DesignContainer;
