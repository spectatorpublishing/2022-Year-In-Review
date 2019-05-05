import React from "react";
import styled from "styled-components";
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import read_more from '../assets/ReadMoreWhite.svg'


const Flipcard = styled.div`
  @media only screen and (max-width: 767px){
    width: 50vw;
    height: 50vw;

  }

  @media only screen and (min-width: 768px){
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
  color: white;
  position: absolute;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
`;

const FrontAuthor = styled.h1`
  text-align: left;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 13vw;
  font-size: 4vw;
  color: white;

  @media only screen and (max-width: 767px){
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 25vw;
    font-size: 9vw;
  }
  
`;


const Title = styled.h4`
  text-align: left;
  color: white;

  @media only screen and (min-width: 768px){
    margin-left: 2vw;
    margin-right: 2vw;
    font-size: 3vw;

  }

  @media only screen and (max-width: 767px){
    margin-left: 8vw;
    margin-right: 8vw;
    font-size: 8vw;
  }

 
`;

const Header = styled.div`
  text-align: left;
  font-size: small;
  margin-right: 2vw;
  margin-top: 2vw;
  display: flex;
  color: white;
`;

const Body = styled.div`
  text-align: left;
  color: white;

  @media only screen and (min-width: 768px){
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 1vw;
    margin-bottom: 2vw;
  }

  @media only screen and (max-width: 767px){
    margin-left: 8vw;
    margin-right: 8vw;
    margin-top: 8vw;
    margin-bottom: 8vw;
    font-size: 5vw;
  }

`;

const Section = styled.h5`
  color: white;
  font-size: small;

  @media only screen and (max-width: 767px){
    margin-top: 10vw;
  }

`;

const Author = styled.h5`
  padding-right: 5px;
  color: white;
  font-size: small;
  
  @media only screen and (min-width: 768px){
    margin-left: 2vw;
  }

  @media only screen and (max-width: 767px){
    margin-top: 10vw;
    margin-left: 8vw;
  }

`;

const Grid = styled.div`
    display: grid;

    @media only screen and (min-width:768px){
        grid-template-columns: 25% 25% 25% 25%;
        grid-auto-rows: 50%; 
        grid-column-gap: 0vw;
        grid-row-gap: 0vw;
    }

    @media only screen and (max-width: 767px){
        grid-template-columns: 50% 50%;
        grid-template-rows: 50vw; 
        grid-column-gap: 0vw;
        grid-row-gap: 0vw;
    }
`;

const Link = styled.a`
`;

const Logo = styled.img`
@media only screen and (min-width:768px){
  left: 50%
  margin-right: -50%
}

@media only screen and (max-width: 767px){
  margin-left: 65vw;
}

`;

const MobileBox = styled.div`
  background-image: ${({shadowed}) => !shadowed ? "" : "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )," } url(${({front_image}) => front_image});
  background-size: cover;
  height: 100%;
  width: 100%;
`
const MobileBack = styled.div`
  background-image: url(${({back_image}) => back_image});
  background-size: cover;
  color: white;
  height:  ${({shown}) => shown ? 100:0}vw;
  width: ${({shown}) => shown ? 100:0}vw;
  opacity: ${({shown}) => shown ? "100" : "0"};
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
  margin-top: -2vw;

`

const ImageBox = (props) => {
  return (
    <div>
      <Flipcard>
        <Inner>
          <Front {...props.data}>
            <FrontAuthor>{props.data.author}</FrontAuthor>
          </Front>
          <Back {...props.data}>
            <Header>
              <Author>{props.data.author}</Author>
              <Section>{props.data.section}</Section>
            </Header>
            <Title>{props.data.title}</Title> 
            <Body>{props.data.body}</Body> 
            <Link href = {props.data.url}><Logo src = {read_more} alt = "readmore"/></Link>
          </Back>
        </Inner>
      </Flipcard>
    </div>
  )
}

export default class Columnists extends React.Component {
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
        <FrontAuthor>{data.author}</FrontAuthor>
      </MobileBox>

      shadow = this.state.selected && !this.state.toggle_control[i+1]

      let front2 = i===this.props.data.length-1 ? null : 
      <MobileBox {...this.props.data[i+1]} shadowed={shadow} onClick={()=>this.handleClick(i+1)}>
        <FrontAuthor>{this.props.data[i+1].author}</FrontAuthor>
      </MobileBox>

      let grid = <Grid>{front1}{front2}</Grid>

      let back1 = 
        <MobileBack {...data}  shown={this.state.toggle_control[i]}>
          <Header>
            <Author>{data.author}</Author>
            <Section>{data.section}</Section>
          </Header>
          <Title>{data.title}</Title> 
          <Body>{data.body}</Body> 
          <Link href = {data.url}><Logo src = {read_more} alt = "readmore"/></Link>
        </MobileBack>

     

      let back2 = i===this.props.data.length-1 ? null : 
        <MobileBack {...this.props.data[i+1]} shown={this.state.toggle_control[i+1]}>
          <Header>
            <Author>{this.props.data[i+1].author}</Author>
            <Section>{this.props.data[i+1].section}</Section>
          </Header>
          <Title>{this.props.data[i+1].title}</Title> 
          <Body>{this.props.data[i+1].body} </Body> 
          <Link href = {this.props.data[i+1].url}><Logo src = {read_more} alt = "readmore"/></Link>
        </MobileBack>

      return (<div>{grid}{back1}{back2}</div> )
    })
    

    const desktop = this.props.data.map((data, i) => <ImageBox key={i} data={data}/>);

    return (
      [
        <MobileAndTablet>
          <div>
            {mobile}
          </div>
        </MobileAndTablet>,
          
        <Desktop>
          <Grid>{desktop}</Grid>
        </Desktop>
      ]
    )
  }
} 
