import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Data for testing

// A url for a testing image
const test_img = "https://placekitten.com/301/301"
const test_url = "http://cs.columbia.edu"
const test_wide_pic = "https://picsum.photos/1500/800"

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

// Data for sportSlider
const sports_slider_data = 
[
	{
		title: "Title1",
		author: "Author1",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title2",
		author: "Author2",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title3",
		author: "Author3",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title4",
		author: "Author4",
		url: test_url,
		img_src: test_wide_pic
	},
	{
		title: "Title5",
		author: "Author5",
		url: test_url,
		img_src: test_wide_pic
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
import ImageBoxSlider from '../containers/ImageBoxSlider'

storiesOf('ImageBoxSlider', module).add('ImageBoxSlider', () => (<ImageBoxSlider data = {image_slider_data} />))

// Test SportsSlide
import SportSlide from '../components/SportSlide.js';

storiesOf('SportsSlideShow', module).add('SportSlide', () => <SportSlide title="title" author="blurb" url={test_url} img_src={test_img}/>)

// Test SportsSlideShow
import SportsSlideShow from '../containers/SportsSlideShow'

storiesOf('SportsSlideShow', module).add('SportsSlideShow', () => (<SportsSlideShow data = {sports_slider_data} />))

// Test scroll arrow
import ScrollArrow from '../components/ScrollArrow.js';
storiesOf('ScrollArrow', module).add('ScrollArrow', () => (<ScrollArrow />))

// Test Navigation
import NavBar from '../components/Navigation/NavBar'
import { NavItems } from "../util/NavItems";
import { MemoryRouter } from 'react-router';

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

// Test Generic Panel Layout
import GenericPanelLayout from '../containers/GenericPanelLayout'

storiesOf('ImageBoxSlider', module).add("GenericPanelLayout",() => <GenericPanelLayout menuItems={NavItems} data = {image_slider_data}/>)