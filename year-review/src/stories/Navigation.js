import React from "react";
import { storiesOf } from '@storybook/react';

// Test Navigation
import NavBar from '../components/Navigation/NavBar';
import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
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
  .add('Navbar', () => <NavBar menuItems={NavItems} />)
  .add('Fixed Navbar', () => <NavBar menuItems={NavItems} fixed />);
  
  storiesOf('Scrolling NavBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div>
        <div style={{backgroundColor: "magenta", width: "100vw", height: "100vh",}}></div>
        {story()}
      </div>
    </MemoryRouter>
  ))
  .add('Scrolling Triggered Navbar', () => { 
    return (
      <ScrollingNavBar menuItems={NavItems}>
        <div style={{backgroundColor: "red", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "orange", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "yellow", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "green", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "blue", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "indigo", width: "100vw", height: "100vh",}}></div>
        <div style={{backgroundColor: "purple", width: "100vw", height: "100vh",}}></div>
      </ScrollingNavBar>
    );
  });