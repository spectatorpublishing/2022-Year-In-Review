import React, { Component } from 'react';

import PageIntro from '../components/PageIntro';
import PhotoGrid from '../components/PhotoGrid.js';
import GenericPanelLayout from './GenericPanelLayout';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import Lightbox from '../components/Lightbox/Lightbox'

class DesignContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <PageIntro title="COVID" description={this.props.data.blurb} img_src={this.props.data.img}/>
                <ScrollingNavBar menuItems={this.props.data.sections}>
                    {this.props.data.items.map((data, i) => 
                        <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
                </ScrollingNavBar>
            </React.Fragment>
        );
    }
}

export default DesignContainer;