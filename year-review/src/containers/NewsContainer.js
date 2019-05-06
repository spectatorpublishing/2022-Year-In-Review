import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

class NewsContainer extends Component {

  constructor() {
      super()
      this.handleWheel = this.handleWheel.bind(this)
  }

  handleWheel(e){
    // let curY = window.window.pageYOffset
    // let height = window.innerHeight

    // if (curY>this.props.SliderData.length*height)
    //   return

    // if (curY % height < height/2)
    //   curY -= curY % height
    // else
    //   curY += (height - curY % height)

    // if(e.deltaY > 0) {
    //   window.scrollTo({
    //     top: curY + height*1.06,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    // } else if (e.deltaY < 0) {
    //   let target = curY - height*0.94
    //   if (target<height)
    //     target -= height*0.06
    //   window.scrollTo({
    //     top: target,
    //     left: 0,
    //     behavior: 'smooth'
    //   }); 
    // }

    // if(e.deltaY > 0) {
    //   window.scrollTo(0, curY + height*1.06)
    // } else if (e.deltaY < 0) {
    //   let target = curY - height*0.94
    //   if (target<height)
    //     target -= height*0.06
    //   window.scrollTo(0, target)
    // }
     
  }

  render() {
    //
        
    return (
      <React.Fragment>
        <div onWheel = {this.handleWheel}>
          <PageIntro title="NEWS" description={this.props.data.blurb} img_src={img_src}/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default NewsContainer;
