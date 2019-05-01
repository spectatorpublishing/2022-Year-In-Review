import React, { Component } from 'react';
import PhotoGrid from '../components/PhotoGrid.js';

export default class PhotoContainer extends Component {
  render() {
    let flip_data = [
      {
        front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
        author: "Ben LaZebnik",
        section: "| YOU HAVE MY WORD",
        back_image: "https://placekitten.com/301/301",
        title: "Disconnected from death",
        body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
      },
      {
        front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
        author: "Ben LaZebnik",
        section: "| YOU HAVE MY WORD",
        back_image: "https://placekitten.com/301/301",
        title: "Disconnected from death",
        body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
      },
      {
        front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
        author: "Ben LaZebnik",
        section: "| YOU HAVE MY WORD",
        back_image: "https://placekitten.com/301/301",
        title: "Disconnected from death",
        body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
      },
    ];
    return (
      <React.Fragment>
          <PhotoGrid data={flip_data} />
      </React.Fragment>
    );
  }
}
