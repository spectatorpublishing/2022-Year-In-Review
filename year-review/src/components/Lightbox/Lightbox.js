import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RightArrow } from "../../assets/arrow.svg";

let LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`
let LightboxContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1512847819326-205ee05f3ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
  background: cover;
  display: flex;
  flex-direction: row;
`
let PreviewContainer = styled.div`
  background: rgba(200,50,200,0.4);
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`
let ImageContainer = styled.div`
  height: 90%;
  width: 70%;
  display: flex;
  justify-content: center;
`
let Image = styled.img`
  height: 100%;
  width: auto;
`
let CaptionContainer = styled.div`
  width: 30%
  padding: 5%;
  overflow-y: scroll;
  background: rgba(180,90,200,0.8);
`
let TitleContainer = styled.div`
`
let TitleLink = styled.a`
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.blue};
  }
`
let Title = styled.h1`
  color: ${props => props.theme.white};
  margin: 10px 0; 
  text-transform: uppercase;
`
let Description = styled.p`
  color: ${props => props.theme.white};
`
let CreditContainer = styled.div`
  margin: 10px 0; 
  width: 100%;
`
let Credit = styled.h4`
  color: ${props => props.theme.white};
  text-transform: capitalize;
`

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      width: window.innerWidth
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    console.log(e.key);
    switch (e.key) {
      case "ArrowLeft":
        this.handleLeftArrowClick();
        break;
      case "ArrowRight":
        this.handleRightArrowClick();
        break;
      case "Escape":
        break;
      default:
        break;
    }
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleLeftArrowClick() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1});
    } else {
      this.setState({ index: this.props.media.length - 1});
    }
  }

  handleRightArrowClick() {
    if (this.state.index + 1 < this.props.media.length) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }

  render() {
    return (
      <LightboxContainer>
        <PreviewContainer>
          <LeftArrow onClick={this.handleLeftArrowClick} />
          <ImageContainer>
            <Image 
              src={this.props.media[this.state.index].imgUrl}
              altText={this.props.media[this.state.index].altText}
            >
            </Image>
          </ImageContainer>
          <RightArrow onClick={this.handleRightArrowClick} />
        </PreviewContainer>

        <CaptionContainer>
          <TitleContainer>
            <TitleLink href={this.props.media[this.state.index].url} target="_blank">
              <Title>{this.props.media[this.state.index].title}</Title>
            </TitleLink>
            <Description>{this.props.media[this.state.index].description}</Description>
          </TitleContainer>

          <CreditContainer>
            <Credit>{this.props.authorLabel}: {this.props.media[this.state.index].author}</Credit>
          </CreditContainer>
        </CaptionContainer>
      </LightboxContainer>
    );
  }
}

export default withRouter(Lightbox);