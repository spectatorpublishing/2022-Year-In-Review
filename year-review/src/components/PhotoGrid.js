import React from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const Flipcard = styled.div`
  @media only screen and (max-width: 991px){
    width: 50vw;
    height: 50vw;

  }

  @media only screen and (min-width:992px){
    width: 25vw;
    height: 25vw; 
    perspective: 1000px;
    -webkit-perspective: 1000px;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: transform 0.8s;

    :hover{
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
  	}
  }

`;

const Inner = styled.div`
	position: relative;
	text-align: center;
  height: 100%;
  width: 100%;

`;

const Front = styled.div`
  background-image: url(${({front_image}) => front_image});
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  background-image: url(${({back_image}) => back_image});
  background-size: cover;
  color: ${props => props.theme.white};
  position: absolute;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
`;

const FrontAuthor = styled.h1`
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 140px;
  font-size: 40px;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  opacity: ${({shadowed}) => shadowed && "0.4"};

  @media only screen and (max-width: 991px){
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 100px;
    font-size: 30px;
  }
  
`;


const Title = styled.h4`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`;

const Header = styled.div`
  text-align: left;
  font-size: small;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  color: ${props => props.theme.white};
`;

const Body = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.white};
`;

const Section = styled.h5`
  font-size: small;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`;

const Author = styled.h5`
  margin-left: 20px;
  padding-right: 5px;
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  font-size: small;

`;

const Grid = styled.div`
    display: grid;

    @media only screen and (min-width:992px){
        grid-template-columns: 25% 25% 25% 25%;
        grid-auto-rows: 50%; 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    @media only screen and (max-width: 991px){
        grid-template-columns: 50% 50%;
        grid-auto-rows: 50vw; 
        grid-column-gap: 3px;
        grid-row-gap: 3px;
    }

`;

const MobileBox = styled.div`
  background-image: ${({shadowed}) => shadowed && "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )," } url(${({front_image}) => front_image});
  background-size: cover;
  height: 100%;
  width: 100%;
`
const MobileBack = styled.div`
  background-image: url(${({back_image}) => back_image});
  background-size: cover;
  color: ${props => props.theme.white};
  height:  ${({shown}) => shown ? 100:0}vw;
  width: ${({shown}) => shown ? 100:0}vw;
  opacity: ${({shown}) => shown ? "100" : "0"};
  transition: height .3s ease;
  -webkit-transition: height .3s ease;
  margin: 0px;
`

const ImageBox = (props) => {
  return (
    <div>
      <Flipcard>
        <Inner>
          <Front {...props.data}>
            <FrontAuthor>{props.data.author}</FrontAuthor>
          </Front>
          <Back {...props.data} onClick={props.goToLink}>
            <Header>
              <Author>{props.data.author}</Author>
              <Section>{props.data.section}</Section>
            </Header>
            <Title>{props.data.title}</Title> 
            <Body>{props.data.body}</Body> 
          </Back>
        </Inner>
      </Flipcard>
    </div>
  )
}

export default class PhotoGrid extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    toggle_control: {},
    selected: false
  }

  componentDidMount(){
    let i = 0
    let control_orig = {}
    for (; i<this.props.data.length;i++)
      control_orig[i] = false
    this.setState({toggle_control: control_orig})
  }

  handleClick = (index) =>{
    let selected = false
    let new_control = {}
    let i = 0
    for (; i<this.props.data.length;i++)
      new_control[i] = false
    if (!this.state.toggle_control[index]){
      new_control[index] = true
      selected = true
    }
    this.setState({toggle_control: new_control, selected: selected})
  }

  render(){
    const mobile = this.props.data.map((data, i) =>{
      if (i % 2 === 1)
          return null
      
      let shadow = this.state.selected && !this.state.toggle_control[i]

      let front1 = 
      <MobileBox {...data} shadowed={shadow} onClick={()=>this.handleClick(i)}>
        <FrontAuthor shadowed={shadow}>{data.author}</FrontAuthor>
      </MobileBox>

      shadow = this.state.selected && !this.state.toggle_control[i+1]

      let front2 = i===this.props.data.length-1 ? null : 
      <MobileBox {...this.props.data[i+1]} shadowed={shadow} onClick={()=>this.handleClick(i+1)}>
        <FrontAuthor shadowed={shadow}>{this.props.data[i+1].author}</FrontAuthor>
      </MobileBox>

      let grid = <Grid>{front1}{front2}</Grid>

      let back1 = 
        <MobileBack {...data} onClick={this.props.goToLink} shown={this.state.toggle_control[i]}>
          <Header>
            <Author>{data.author}</Author>
            <Section>{data.section}</Section>
          </Header>
          <Title>{data.title}</Title> 
          <Body>{data.body}</Body> 
        </MobileBack>

      let back2 = i === this.props.data.length-1 ? null : 
        <MobileBack {...this.props.data[i+1]} onClick={this.props.goToLink} shown={this.state.toggle_control[i+1]}>
          <Header>
            <Author>{this.props.data[i+1].author}</Author>
            <Section>{this.props.data[i+1].section}</Section>
          </Header>
          <Title>{this.props.data[i+1].title}</Title> 
          <Body>{this.props.data[i+1].body}</Body> 
        </MobileBack>

      return (<div key={i}>{grid}{back1}{back2}</div> )
    })

    const desktop = this.props.data.map((data, i) => <ImageBox key={i} data={data}/>);

    return (
      <React.Fragment>
        <MobileAndTablet>
          <div>
            {mobile}
          </div>
        </MobileAndTablet>
        <Desktop>
          <Grid>{desktop}</Grid>
        </Desktop>
      </React.Fragment>
    )
  }
} 
