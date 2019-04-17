import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "../src/util/GlobalStyles";

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
          <GlobalStyles />
          {storyFn()}
      </React.Fragment>
    </ThemeProvider>
  );
}

addDecorator(withGlobalStyles);

function loadStories() {
  require('../src/stories/StyleGuide.js');
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);