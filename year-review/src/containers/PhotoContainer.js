import React, { Component } from 'react';
import styled from 'styled-components';

import PhotoGrid from '../components/PhotoGrid.js';
import PhotoEssayBox from '../components/PhotoEssayBox'
import PageIntro from '../components/PageIntro'

const description = "Most undergraduates will only experience a small sliver of Columbia's history during their time here; current students just lived through a year for the record books. As the University marked the fiftieth anniversary of the 1968 protests that redined its identity, campus was roiled by a new series of student protests."
const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

export default class PhotoContainer extends Component {
  render() {
    // let flip_data = [
    //   {
    //     front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
    //     author: "Ben LaZebnik",
    //     section: "| YOU HAVE MY WORD",
    //     back_image: "https://placekitten.com/301/301",
    //     title: "Disconnected from death",
    //     body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
    //   },
    //   {
    //     front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
    //     author: "Ben LaZebnik",
    //     section: "| YOU HAVE MY WORD",
    //     back_image: "https://placekitten.com/301/301",
    //     title: "Disconnected from death",
    //     body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
    //   },
    //   {
    //     front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
    //     author: "Ben LaZebnik",
    //     section: "| YOU HAVE MY WORD",
    //     back_image: "https://placekitten.com/301/301",
    //     title: "Disconnected from death",
    //     body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
    //   },
    // ];
    return (
      <React.Fragment>
        <PageIntro title="PHOTO" description={description} img_src={img_src}/>
        <PhotoEssayBox data = {this.props.photo_data} />
      </React.Fragment>
    );
  }
}
