import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PageIntro from '../components/PageIntro.js';
import Article from '../components/Article.js';
import ImageBoxSlider from '../containers/ImageBoxSlider';
import GenericPanelLayout from '../components/GenericPanelLayout';
import SportSlide from '../components/SportSlide.js';
import SportsSlideShow from '../containers/SportsSlideShow'
import NavBar from '../components/Navigation/NavBar'
import { NavItems } from "../util/NavItems";
import { MemoryRouter } from 'react-router';
import Photo from '../components/Photo.js';



// Data for testing

// A url for a testing image
const test_img = "https://placekitten.com/301/301"
const test_url = "http://cs.columbia.edu"

// Data for imageSlider
const image_slider_data = 
[
	{
		title: "Title1",
		author: "Author1",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title2",
		author: "Author2",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title3",
		author: "Author3",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title4",
		author: "Author4",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title5",
		author: "Author5",
		url: test_url,
		img_src: test_img
	},
]
// Test Storybook
storiesOf('Test', module).add('Test', () => (<h1>Hello</h1>))

// Test Page Intro
                                             
storiesOf('PageIntro', module).add('PageIntro', () => <PageIntro title1="title" text1="blurb" title2="title" text2="blurb" img_src={test_img} />)

// Test Article

storiesOf('ImageBoxSlider', module).add('Article', () => <Article title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test ImageBoxSlider

storiesOf('ImageBoxSlider', module).add('ImageBoxSlider', () => (<ImageBoxSlider data = {image_slider_data} />))

// Test Generic Panel Layout

storiesOf('ImageBoxSlider', module).add("GenericPanelLayout",() => <GenericPanelLayout />)

// Test SportsSlide

storiesOf('SportsSlideShow', module).add('SportSlide', () => <SportSlide title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test SportsSlideShow

storiesOf('SportsSlideShow', module).add('SportsSlideShow', () => (<SportsSlideShow data = {image_slider_data} />))

//Test Photo

storiesOf('Photo', module).add('Photo', () => <Photo photos={[test_img, test_img, test_img, test_img, test_img, test_img, test_img, test_img]} />)


// Test Navigation


storiesOf('NavBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div>
        {story()}
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
      </div>
    </MemoryRouter>
  ))
  .add('navbar', () => <NavBar menuItems={NavItems} />)
  .add('fixed navbar', () => <NavBar menuItems={NavItems} fixed />);