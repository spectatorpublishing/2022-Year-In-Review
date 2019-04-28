import React from 'react';
import { storiesOf } from '@storybook/react';
import { opinion_data, NewsTestData, sports_slider_data } from '../util/TestData'

// Data for testing

// A url for a testing image
const test_img = "https://placekitten.com/301/301"
const test_img2 = "https://placekitten.com/400/300"
const test_url = "http://cs.columbia.edu"
const img = "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg";
const test_wide_pic = "https://picsum.photos/1500/800"


// Data for imageSlider
const image_slider_data = 
[
	{
		title: "Title1",
		author: "Author1",
		url: test_url,
		img_src: "https://placekitten.com/400/300"
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

const flip_data = [
{
	front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
	author: "Ben LaZebnik",
	section: "| YOU HAVE MY WORD",
	back_image: "https://placekitten.com/301/301",
	title: "Disconnected from death",
	body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."
},
]

// Test Storybook
storiesOf('Test', module).add('Test', () => (<h1>Hello</h1>))

// Test Page Intro
import PageIntro from '../components/PageIntro.js';
storiesOf('PageIntro', module).add('PageIntro', () => <PageIntro title1="title" text1="blurb" title2="title" text2="blurb" img_src={test_img} />)

// Test Article
import Article from '../components/Article.js';
storiesOf('ImageBoxSlider', module).add('Article', () => <Article title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test ImageBoxSlider
import ImageBoxSlider from '../containers/ImageBoxSlider';
storiesOf('ImageBoxSlider', module).add('ImageBoxSlider', () => (<ImageBoxSlider data = {image_slider_data} />))

// Test SportsSlide
import SportSlide from '../components/SportSlide.js';
storiesOf('SportsSlideShow', module).add('SportSlide', () => <SportSlide title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test SportsSlideShow
import SportsSlideShow from '../containers/SportsSlideShow'
storiesOf('SportsSlideShow', module).add('SportsSlideShow', () => (<SportsSlideShow data = {sports_slider_data} />))

//Test PhotoGrid
import PhotoGrid from '../components/PhotoGrid.js';
storiesOf('PhotoGrid', module).add('PhotoPanel', () => <PhotoGrid data={image_slider_data} />)

//Test Flip Image-Box
import ImageBox from '../components/ImageBox/ImageBox';
storiesOf('PhotoGrid', module).add('Photo', () => <ImageBox/>)

// Test Generic Panel Layout
import GenericPanelLayout from '../containers/GenericPanelLayout'
storiesOf('ImageBoxSlider', module).add("GenericPanelLayout",() => <GenericPanelLayout data = {NewsTestData.image_and_text[0]}/>)
                                        
// Test Home Page
import HomePage from '../components/HomePage.js'
storiesOf('HomePage', module).add('HomePage',() => <HomePage img_src={test_wide_pic}/>)

// Test ExpandingColumns
import ExpandingColumns from '../components/ExpandingColumns'
storiesOf('ExpandingColumns', module).add("ExpandingColumns",() => <ExpandingColumns data = {opinion_data}/>)

