import React from "react";
import { storiesOf } from '@storybook/react';

// Test Lightbox
import Lightbox from '../components/Lightbox/Lightbox';
import { MemoryRouter } from 'react-router';

let sampleMedia = [
  {
    imgUrl: "https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    altText: "Telefónica headquarters in Gran Vía",
    title: "Calle Gran Vía, Madrid, Spain",
    description: "Gran Vía (literally 'Great Way') is a street located in central Madrid, Spain. The street, sometimes referred to as the 'Spanish Broadway', is one of the city's most important shopping areas, with a large number of hotels and large movie theatres; however, in recent years, many of these theatres have been replaced by shopping centres. The Gran Vía serves as showcase of early 20th-century revival architecture, with architectural styles ranging from Vienna Secession style, Plateresque, Neo-Mudéjar, Art Deco, and others.",
    url: "https://unsplash.com/photos/TAW3H-7NV5k",
    author: "Alev Takil"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1551899892-56314e56f2c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80",
    altText: "The Metropolis Building or Edificio Metrópolis on Gran Vía",
    title: "Edificio Metrópolis, Madrid",
    description: "The Metropolis Building or Edificio Metrópolis (Spanish) is an office building in Madrid, Spain, at the corner of the Calle de Alcalá and Gran Vía. Inaugurated in 1911, it was designed by Jules and Raymond Février for the insurance company La Unión y el Fénix. It is currently owned by Metrópolis Seguros.",
    url: "https://unsplash.com/photos/bviR09mlwoU",
    author: "Alberto Robledano"
  }
];

let fakeOnClose = () => console.log("Trigger Close");

storiesOf('Lightbox', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      {story()}
    </MemoryRouter>
  ))
  .add('Lightbox', () => <Lightbox 
      index={0} 
      media={sampleMedia} 
      authorLabel="photographer"
      onClose={fakeOnClose}
    />
  );
  