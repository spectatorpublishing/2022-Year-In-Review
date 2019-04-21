import React from "react";
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

let ThemeSection = styled.div`
  margin: 2rem;
`

let ClearBG = styled.div`
  padding: 0.3rem;
`

let BlackBG = styled(ClearBG)`
  background-color: ${props => props.theme.black};
`

let IndigoBG = styled(ClearBG)`
  background-color: ${props => props.theme.indigo};
`

let BlueBG = styled(ClearBG)`
  background-color: ${props => props.theme.blue};
`

let Black = styled.h3`
  color: ${props => props.theme.black};
`

let Indigo = styled.h3`
  color: ${props => props.theme.indigo};
`

let Blue = styled.h3`
  color: ${props => props.theme.blue};
`

let White = styled.h3`
  color: ${props => props.theme.white};
`

let WhiteShadowed = styled(White)`
  text-shadow: ${props => props.theme.shadow};
`

storiesOf('Style Guide', module)
  .add('Fonts', () => 
    <ThemeSection>
      <h1>Heading1 {"<h1>"}</h1>
      <h2>Heading2 {"<h2>"}</h2>
      <h3>Heading3 {"<h3>"}</h3>
      <h4>Heading4 {"<h4>"} - (identical to {"<b>"})</h4>
      <h5>Heading5 {"<h5>"} - (identical to {"<p>"})</h5>
      <h6>Heading6 {"<h6>"} - use only as caption or fine print (hard to read)</h6>
      <br/>
      <p>Text {"<p>"} - (identical to {"<h5>"}</p>
      <b>TextBold {"<b>"} - (identical to {"<h4>"})</b>
    </ThemeSection>
  )
  .add('Colors', () => 
    <ThemeSection>
      <b>Pass colors in through Styled Components' theme prop like so:</b>
      <br/>
      <code>{"${props => props.theme.colorNameHere}"}</code>
      <br/>
      <br/>
      <h6>e.g.</h6>
      <code>{"color: ${props => props.theme.blue};"}</code>
      <h6>renders as</h6>
      <code>{"color: #3CABDB;"}</code>
      <br/>
      <br/>
      <h6>except `shadow` should only be used with the `text-shadow` or `box-shadow` css property:</h6>
      <code>{"text-shadow: ${props => props.theme.shadow};"}</code>
      <h6>which renders as</h6>
      <code>{"text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);"}</code>
      <br/>
      <br/>
      <ClearBG><Black>black</Black></ClearBG>
      <ClearBG><Indigo>indigo</Indigo></ClearBG>
      <ClearBG><Blue>blue</Blue></ClearBG>
      <BlackBG><White>white on black</White></BlackBG>
      <IndigoBG><White>white on indigo</White></IndigoBG>
      <BlueBG><WhiteShadowed>white with shadow on blue</WhiteShadowed></BlueBG>
      <ClearBG><WhiteShadowed>shadow</WhiteShadowed></ClearBG>
      <br/>
      <br/>
      <b>Styled Component Source Code:</b>
      <br/>
      <code>{`
      let BlackBG = styled(ClearBG)\`
      background-color: ${props => props.theme.black};
      \`
      `}</code>
      <br/>
      <code>{`
      let BlueBG = styled(ClearBG)\`
      background-color: ${props => props.theme.blue};
      \`
      `}</code>
      <br/>
      <code>{`
      let IndigoBG = styled(ClearBG)\`
      background-color: ${props => props.theme.indigo};
      \`
      `}</code>
      <br/>
      <code>{`
      let Black = styled.h3\`
      color: ${props => props.theme.black};
      \`
      `}</code>
      <br/>
      <code>{`
      let Indigo = styled.h3\`
      color: ${props => props.theme.indigo};
      \`
      `}</code>
      <br/>
      <code>{`
      let Blue = styled.h3\`
      color: ${props => props.theme.blue};
      \`
      `}</code>
      <br/>
      <code>{`
      let White = styled.h3\`
      color: ${props => props.theme.white};
      \`
      `}</code>
      <br/>
      <code>{`
      let WhiteShadowed = styled(White)\`
      text-shadow: ${props => props.theme.shadow};
      \`
      `}</code>
    </ThemeSection>
  );