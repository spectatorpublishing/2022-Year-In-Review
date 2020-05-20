import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import Lightbox from '../components/Lightbox/Lightbox'

class GraphicsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return(
            <React.Fragment>
                <PageIntro title="Graphics" description={this.props.data.blurb} img_src={this.props.data.img}/>
                
                <ScrollingNavBar menuItems={this.props.data.sections}>
                    {this.props.data.items.map((data, i) => 
                        <React.Fragment>
                            <h3 style={{color: "white", Left: "1vw", padding: "1vh", "backgroundColor": "black"}}> {data.name}</h3>
                            <PhotoGrid data={data.articles} openLightbox={this.openGraphicsLightbox}/>
                            {
                                this.state.graphicsLightboxActive && <Lightbox
					                index={this.state.lightboxIndex} 
					                media={data.articles} 
					                onClose={this.closeGraphicsLightbox
                                    }>
				                </Lightbox>
                            }    
                        </React.Fragment>
                    )}
                </ScrollingNavBar>

               
                    
                    
            </React.Fragment>
        );
    }
}

export default GraphicsContainer;