import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const letter = 
"This past academic year has seen changes of unprecedented nature. Ending the fall semester with the tragic loss of Barnard first-year Tessa Majors, we plunged into another semester only to have to evacuate campus and transition to remote learning as the world battled with the COVID-19 pandemic. The events of these months—both at the University and across the nation—will be documented as pivotal events in history for years to come.\
\n\nThroughout this time, we have striven to show how universities and colleges hold more power than just that within the realm of academia—they are capable of impacting thousands of people beyond just the walls of their campuses. As students, staff, administrators, investors, and West Harlem residents continue to grapple with Columbia’s global impact as an institution, we at Spectator will continue to critically engage with institutional practices and shine a light on betrayals of public trust by Columbia.\
\n\nThough at first glance, Columbia seems to be a predominantly academic and intellectual space, the events of this year demonstrate that there are many more facets of a multi-billion dollar institution that remain unexplored. As such, we also made the critical decision this year to expand our coverage of Columbia’s relationship with the community with pieces that examine how historical factors—such as the exclusion of low-income Black residents from Morningside Heights—have lasting impacts on healthcare resources, public education, and more for West Harlem residents. What happens during a public health crisis when the only hospital in West Harlem is located in a neighborhood founded on anti-Blackness? While students, faculty, and administrators scrambled to leave campus, how does the University ensure the safety of the essential workers who helped those populations get home?\
\n\nWe invite you to take a look back on the stories that shaped a turning point in Columbia’s history.\
"


let LetterContain = styled.div`
  padding-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: ${props => props.theme.black};
`

let MobileContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.black};

`

let TempLetter = styled.h2`
  height: 15%;
  width: 80%;
  max-width: 999px;
  color: ${props => props.theme.white};
  display: flex;
  align-text: justify;
  align-items: left;
  margin-right: 10vw;
  margin-bottom: 20px;
  font-size: 5em;
  position: relative;
`
const TitleBlurb = styled.p`
  font-weight: 25;
  width: 80%; 
  // margin-left: 5vw;
  // margin-right: 5vw;
  color: white;
  // margin-top: 5vh;
  text-align: left;
  z-index: 2;
  position: relative;
  white-space: pre-line;
`;

let MobileLetter = styled.h3`
    display: flex;
    padding: 15px 10vw;
    margin-top: 0.8rem;
    text-align: center;
    color: ${props => props.theme.white};
`

const MobileBlurb = styled.p`
  color: white;
  white-space: pre-line;
  padding: 15px 10vw;

`

const Role = styled.div`
 color: ${props => props.theme.transparentWhite};
 padding-left: 0.5rem;

`;
const Line = styled.h5`
   color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
   @media only screen and (max-width: 991px){
    padding: 0px 10vw 15px 10vw;
    font-size: 1em;
    margin: 0;
 }
`;
const MobileRole = styled(Role)`
 padding-left: 0;
`;
const MobileLine = styled(Line)`
 flex-direction: column;
`
const Border = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    color: black;
    width: 69.211px;
    border-width: 2pt;
    float: left;
    @media only screen and (max-width: 991px){
      padding: 15px 10vw 5px 10vw;
      margin: 0;
   }
`
const SectionDivider = styled.hr`
  height: 1px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.white};
  border: none;
`

class EditorLetter extends Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <LetterContain>
            <TempLetter> Dear Readers, </TempLetter>
            <TitleBlurb>{letter}</TitleBlurb>
            <Border><SectionDivider/></Border>
            <Line>Karen Xia, <Role>Editor in Chief, President</Role></Line> 
            <Line>Shubham Saharan, <Role>Managing Editor, Vice President</Role></Line> 
          </LetterContain>
        </Desktop>
        <MobileAndTablet>
          <MobileContain>
            <MobileLetter> Dear Readers, </MobileLetter>
            <MobileBlurb>{letter}</MobileBlurb>
            <Border><SectionDivider/></Border>
            <MobileLine>Karen Xia, <MobileRole>Editor in Chief, President</MobileRole></MobileLine> 
            <MobileLine>Shubham Saharan, <MobileRole>Managing Editor, Vice President</MobileRole></MobileLine> 
          </MobileContain>
        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
