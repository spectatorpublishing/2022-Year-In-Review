import React from 'react';
import { storiesOf } from '@storybook/react';
import { opinion_data, NewsTestData, sports_slider_data } from '../util/TestData'

import PageIntro from '../components/PageIntro.js';
import Article from '../components/Article.js';
import ImageBoxSlider from '../containers/ImageBoxSlider';
import SportSlide from '../components/SportSlide.js';
import SportsSlideShow from '../containers/SportsSlideShow';
import PhotoGrid from '../components/PhotoGrid.js';
import ImageBox from '../components/ImageBox/ImageBox';
import GenericPanelLayout from '../containers/GenericPanelLayout';
import HomePage from '../components/HomePage.js';
import ExpandingColumns from '../components/ExpandingColumns';
import Footer from '../components/Footer.js';
import FooterHome from '../components/FooterHome.js';
import SpectrumSlider from '../components/SpectrumSlider.js';

// Data for testing

// A url for a testing image
const test_img = "https://placekitten.com/301/301"
const test_img2 = "https://placekitten.com/400/300"
const test_url = "http://cs.columbia.edu"
const img = "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg";
const test_wide_pic = "https://picsum.photos/1450/800"


// Data for imageSlider
const image_slider_data = 
[
	{
		title: "Title1",
		author: "Author1",
		description: "something valuable",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title2",
		author: "Author2",
		description: "something valuable",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title3",
		author: "Author3",
		description: "something valuable",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title4",
		author: "Author4",
		description: "something valuable",
		url: test_url,
		img_src: test_img
	},
	{
		title: "Title5",
		author: "Author5",
		description: "something valuable",
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
]

// Test Storybook
storiesOf('Test', module).add('Test', () => (<h1>Hello</h1>))

// Test Page Intro
storiesOf('PageIntro', module).add('PageIntro', () => <PageIntro title1="title" text1="blurb" title2="title" text2="blurb" img_src={test_img} />)

// Test Article
storiesOf('ImageBoxSlider', module).add('Article', () => <Article title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test ImageBoxSlider
storiesOf('ImageBoxSlider', module).add('ImageBoxSlider', () => (<ImageBoxSlider data = {image_slider_data} />))

// Test SportsSlide
storiesOf('SportsSlideShow', module).add('SportSlide', () => <SportSlide title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test SportsSlideShow
storiesOf('SportsSlideShow', module).add('SportsSlideShow', () => (<SportsSlideShow data = {sports_slider_data} />))

//Test PhotoGrid
storiesOf('PhotoGrid', module).add('PhotoPanel', () => <PhotoGrid data={flip_data} />)

//Test Flip Image-Box
storiesOf('PhotoGrid', module).add('Photo', () => <ImageBox data = {flip_data[0]}/>)

// Test Generic Panel Layout
storiesOf('ImageBoxSlider', module).add("GenericPanelLayout",() => <GenericPanelLayout data = {NewsTestData.image_and_text[0]}/>)
                                        
// Test Home Page
storiesOf('HomePage', module).add('HomePage',() => <HomePage img_src={test_wide_pic}/>)

// Test ExpandingColumns
// storiesOf('ExpandingColumns', module).add("ExpandingColumns",() => <ExpandingColumns data = {opinion_data}/>)

// Test Generic Panel Layout
storiesOf('Spectrum', module).add("ArticleSlider",() => <SpectrumSlider data = {opinion_data}/>)

// Test Footer
storiesOf('Footer', module).add("Footer",() => <Footer />)
	.add("Footer Home",() => <FooterHome />)