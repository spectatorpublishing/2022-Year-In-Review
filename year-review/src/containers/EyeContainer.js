import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

let ParagraphBr = styled.br`
  line-height: 200%;
`

let A = styled.a`
  color: ${props => props.theme.white};
  text-decoration-color: ${props => props.theme.blue};

  &:hover {
    color: ${props => props.theme.blue};
  }
  &:focus {
    color: ${props => props.theme.blue};
  }
  &:active {
    color: ${props => props.theme.blue};
  }
`

const letterFromTheEditor = <React.Fragment>Dear readers,
  <ParagraphBr />
  The school year has nearly come and gone, and with its close we archive another full year of reporting and writing. This past year, I’ve been particularly proud of the ways our stories have pushed us to view our campus and the community we inhabit in a new light. 
  <ParagraphBr />
  We set our sights forward and wrote about the way things grow and change: from <A href="https://www.columbiaspectator.com/the-eye/2018/11/15/growing-together-the-student-effort-to-change-barnards-neuroscience-program/" target="_blank">Barnard’s neuroscience program</A>, to the birth of <A href="https://www.columbiaspectator.com/the-eye/2018/12/07/what-is-global-thought-anyway/" target="_blank">strange</A>, <A href="https://www.columbiaspectator.com/the-eye/2018/10/16/health-healing-and-death-the-new-track-in-barnards-anthropology-department/" target="_blank">new</A> academic fields, to the very meaning of the <A href="https://www.columbiaspectator.com/the-eye/2018/10/25/trans-students-barnard-admissions-and-the-changing-meaning-of-the-womens-college/" target="_blank">‘Women’s College’</A>. We shadowed <A href="https://www.columbiaspectator.com/the-eye/2018/11/13/meet-the-rockstars-on-columbias-competition-math-team/" target="_blank">mathletes</A> prepping for a national competition, <A href="https://www.columbiaspectator.com/the-eye/2018/08/30/student-musician-commentary/" target="_blank">student musicians</A> readying to take the stage, and <A href="https://www.columbiaspectator.com/the-eye/2019/02/25/can-a-psychiatric-research-project-further-mental-health-education-in-harlem/" target="_blank">psychiatric researchers</A> developing mental health education in Harlem. We worried a lot about our future: What happens to <A href="https://www.columbiaspectator.com/the-eye/2018/10/08/ten-years-ago-columbia-pledged-76-million-to-local-nonprofits-what-happens-when-it-runs-out/" target="_blank">local nonprofits</A> when University funding runs out? How can Barnard help cultivate community for its <A href="https://www.columbiaspectator.com/the-eye/2019/02/26/how-can-barnard-help-cultivate-community-for-its-fgli-students/" target="_blank">FGLI students</A>? Can <A href="https://www.columbiaspectator.com/eye-lead/2018/11/14/can-columbias-fraternities-survive-the-national-threat-to-greek-life/" target="_blank">Columbia’s fraternities</A> change?
  <ParagraphBr />
  We dove backwards, deep into the archives, gleaning knowledge from our tumultuous past. We excavated a history of struggles at Columbia—for hiring and funding and unions and parties and spaces (and more spaces) and even for the preservation of history itself. We remembered how things came to be: a neighborhood, a jazz club, your dorm, and we remembered things no longer with us: beloved professors and priests, a University-run shelter, and an entire college Columbia may prefer to forget.
  <ParagraphBr />
  We turned our gaze outwards, beyond the borders of the Morningside campus and into the West Harlem community. We wrote and wrote and wrote about the Community Benefits Agreement, the document that enshrines Columbia’s commitments to the neighborhood in compensation for its Manhattanville expansion. We thought about the consequences of that expansion—about how local residents remain resilient in the face of displacement and noise, and about how the expansion has shaped local hiring, on construction sites and among residents.
  <ParagraphBr />
  We looked inwards, in our essays, reflecting on our walks and our runs (political and otherwise), on how others try to define us, and on how we define ourselves. We wrote about about loss of family and of home, about identity as a daughter and a sister and a brother. We chased waterfalls and connecting flights. We thought about what it meant to be both here and not, to enter the public record, to become engulfed in a media firestorm. We took more walks—some of these were long and painful walks and others had dogs—and we thought a lot on those walks, about music, about lights. We've also had our walks interrupted by the odd headless eel.
  <ParagraphBr />
  But wherever we looked, we looked closely: peeking behind the closed door of the Advisory Committee on Socially Responsible Investing, unearthing Columbia’s underground music scene, and stepping into the exclusive world of student clubs. We parsed through many, many pages of policy, investigating how Columbia’s gender-based misconduct policy has left student leaders facing accusations within their groups without clear guidance, and how hate crime and bias-incident response protocols have been applied inconsistently, if at all. We analyzed 327 pages of legalese, which we carried in our backpacks for weeks, in order to understand how the Declaration of Covenants and Restrictions informs Columbia’s relationship with the West Harlem community. We scrutinized governmental policies, too, and found that for international graduate students and postdocs, life can hinge on the limitations of visa policy.
  <ParagraphBr />
  As we set our sights on summer after a year of looking elsewhere, we leave knowing a little better what our university and our community look like. Whether the next four months bring you a life-changing trek in the Himalayas, or a life-affirming experience in the field you’ve dreamed of, or, possibly, just an internship at Goldman Sachs, we can only hope that we’ve made an impact on the way you see campus—that everything we have researched, reported, and written has challenged you to look at Columbia through the same eyes that we do: lovingly and critically and carefully.
  <ParagraphBr />
  See you next year,
  <br />
  Julian Shen-Berro
  <br />
  Managing Editor of The Eye
  </React.Fragment>


class EyeContainer extends Component {

  constructor() {
      super()

  }

  render() {
    return (
      <React.Fragment>
        <div>
          <PageIntro title="THE EYE" description={this.props.data.blurb} img_src={img_src}/>
          <EditorLetter letter={letterFromTheEditor}/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default EyeContainer;
