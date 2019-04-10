import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Article from '../components/Article.js';

import NavigationItems from '../Component/Navigation/NavigationItems'

storiesOf('Article', module).add('Article', () => <Article title="title" author="author"/>);
