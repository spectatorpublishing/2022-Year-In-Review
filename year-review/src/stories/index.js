import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { opinion_data, NewsTestData, sports_slider_data } from '../util/TestData';

import PageIntro from '../components/PageIntro.js';
import Article from '../components/Article.js';
import ImageBoxSlider from '../containers/ImageBoxSlider';
import SportSlide from '../components/SportSlide.js';
import SportsSlideShow from '../containers/SportsSlideShow';
import PhotoGrid from '../components/PhotoGrid.js';
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
{
	title: "Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of color",
	description: "After Columbia University College Republicans invited white nationalist speakers Mike Cernovich and Tommy Robinson to campus, hundreds of students reacted with outrage and organized protests, rallies, and marches against the speakers",
	img_src: test_img2,
	article_box_data: 
	[
		{
			title: "Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of color",
			description: "After Columbia University College Republicans invited white nationalist speakers Mike Cernovich and Tommy Robinson to campus, hundreds of students reacted with outrage and organized protests, rallies, and marches against the speakers",
			author: "Author 1",
			url: test_url,
			img_src: test_img2
		},
		{
			title: "Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of colortitle: Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of color",
			description: "After Columbia University College Republicans invited white nationalist speakers Mike Cernovich and Tommy Robinson to campus, hundreds of students reacted with outrage and organized protests, rallies, and marches against the speakers",
			author: "Author 2",
			url: test_url,
			img_src: test_img
		},
		{
			title: "Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of color",
			description: "Author3",
			author: "Author 3",
			url: test_url,
			img_src: test_img
		},
		{
			title: "Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of color",
			description: "Author4",
			author: "Author 4",
			url: test_url,
			img_src: test_img
		},
		{
			title: "Racist harassment, anti-Semitic graffiti incite discussion of campus safety for students of color",
			description: "Author5",
			author: "Author 5",
			url: test_url,
			img_src: test_img
		},
	],
}

const flip_data = [
	{
		front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
		author: "Ben1",
		section: "| YOU HAVE MY WORD",
		back_image: "https://placekitten.com/301/301",
		title: "Disconnected from death",
		body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world"
	},
	{
		front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
		author: "Ben2",
		section: "| YOU HAVE MY WORD",
		back_image: "https://placekitten.com/301/301",
		title: "Disconnected from death",
		body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world"
	},
	{
		front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
		author: "Ben3",
		section: "| YOU HAVE MY WORD",
		back_image: "https://placekitten.com/301/301",
		title: "Disconnected from death",
		body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world"
	},
	{
		front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
		author: "Ben1",
		section: "| YOU HAVE MY WORD",
		back_image: "https://placekitten.com/301/301",
		title: "Disconnected from death",
		body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world"
	},
	{
		front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
		author: "Ben2",
		section: "| YOU HAVE MY WORD",
		back_image: "https://placekitten.com/301/301",
		title: "Disconnected from death",
		body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world"
	},
	{
		front_image: "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg",
		author: "Ben3",
		section: "| YOU HAVE MY WORD",
		back_image: "https://placekitten.com/301/301",
		title: "Disconnected from death",
		body: "colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world"
	},
];

const opinion_sections = [
	{
		img_src: "https://images.unsplash.com/photo-1466129646777-494b376a670c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		name: "Op-Eds",
		link: '#opeds'
	},
	{
		img_src: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		name: "Love Actualized",
		link: '#love-actualized'
	},
	{
		img_src: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
		name: "Columns",
		link: '#column'
	},
	{
		img_src: "https://images.unsplash.com/photo-1520634996521-d0985c84316a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1498&q=80",
		name: "Discourse and Debate",
		link: "#discourse-and-debate"
	}
];

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
storiesOf('PhotoGrid', module)
	.add('PhotoGrid', () => <PhotoGrid data={flip_data}/>)
	.add('Flipping PhotoGrid', () => <PhotoGrid data={flip_data} flip/>)

// Test Generic Panel Layout
storiesOf('ImageBoxSlider', module).add("GenericPanelLayout",() => <GenericPanelLayout data = {NewsTestData.image_and_text[0]}/>)
                                        
// Test Home Page
storiesOf('HomePage', module).add('HomePage',() => <HomePage img_src={test_wide_pic}/>)

// Test Generic Panel Layout
storiesOf('Spectrum', module).add("ArticleSlider",() => <SpectrumSlider data = {opinion_data}/>)

// Test Footer
storiesOf('Footer', module).add("Footer",() => <Footer />)
	.add("Footer Home",() => <FooterHome />)

// Test Expanding Columns
storiesOf('Expanding Columns', module)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/notEmptyRoute']}>
			{story()}
		</MemoryRouter>
	))
	.add("Expanding Columns",() => <ExpandingColumns data = {opinion_sections}/>)