import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const letter = `Dear readers, 

This has been a year of change like no other. For many of us, we spent the year away from Morningside Heights, creating a Columbia community from the confines of our bedroom. However, a remote campus has not stopped the forces of social justice across the campus. Throughout the course of a global pandemic, we have seen a tuition strike rise and eventually fall, a student workers’ strike that led to the Graduate Workers of Columbia-United Auto Workers’ first proposed contract, though it was eventually rejected. The events of the 2020-21 school year will be moments that will define not only Columbia but also New York City and the United States for decades to come. 

At Spectator, we have used our year of remote learning to show the inequities within the Morningside Heights and West Harlem communities and how Columbia’s power as a major research institution has increased those gaps. As the University continues to engage with its students, faculty, administrators, and trustees and continues to expand its influence over members of the Morningside Heights and West Harlem communities, we will continue to hold those in power to account and investigate what goes on inside the offices in Low Library. 

While the University may appear to be an institution primarily focused on education, this year has demonstrated that a multi-billion dollar research university has far more stories to be told than just those in the classroom. This year, we focused on interrogating how Columbia interacts with its students and the larger community. We hope that through observing the events of the past year—from how the COVID-19 vaccine was unevenly distributed between Morningside Heights and Harlem to the depleting local business scene on Broadway to how the University’s athletic facilities negatively influence recruitment and performance—you can look at Columbia a little bit differently than you did before.  

We invite you to take a look back on the stories this year that shaped a turning point in Columbia’s history and will continue to influence the University’s future.
`;


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
            <Line>Sarah Braka, <Role>Editor in Chief, President</Role></Line> 
            <Line>Lizzie Karpen, <Role>Managing Editor, Vice President</Role></Line> 
          </LetterContain>
        </Desktop>
        <MobileAndTablet>
          <MobileContain>
            <MobileLetter> Dear Readers, </MobileLetter>
            <MobileBlurb>{letter}</MobileBlurb>
            <Border><SectionDivider/></Border>
            <MobileLine>Sarah Braka, <MobileRole>Editor in Chief, President</MobileRole></MobileLine> 
            <MobileLine>Lizzie Karpen, <MobileRole>Managing Editor, Vice President</MobileRole></MobileLine> 
          </MobileContain>
        </MobileAndTablet>
      </React.Fragment>
    );
  }
}

export default EditorLetter;
