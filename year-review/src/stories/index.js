import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Article from '../components/Article.js';

import NavigationItems from '../Component/Navigation/NavigationItems'
import ImageBoxSlider from '../Container/ImageBoxSlider'



storiesOf('Test', module).add('Test', () => (<h1>Hello</h1>))

storiesOf('ImageBoxSlider', module).add('ImageBoxSlider', () => (<ImageBoxSlider />))

storiesOf('Article', module).add('Article', () => <Article img_src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" title="title" author="author"/>);

