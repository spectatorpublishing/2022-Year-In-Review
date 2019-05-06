import React, {Component} from 'react';
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import SpectrumSlide from '../components/SpectrumSlide'
import SpectrumSlider from '../components/SpectrumSlider'

import white_arrow from '../assets/right_arrow.svg'
import black_arrow from '../assets/left_arrow.svg'
import filledCircle from '../assets/filledCircle.svg'
import emptyCircle from '../assets/emptyCircle.svg'

const mobileSize = 992

const ImageContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow: hidden;
	position: relative;
`
const BoxPanel = styled.div`
	display: flex;
	width: 100vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`

const Arrow = styled.img`
	width: 2vw;
  	z-index: 1;
  	transform: ${props => props.left ? "rotate(180deg)" : ""};
  	position: absolute;
  	top: 50vh;
  	left: ${props => props.left ? "3vw" : "97vw"};
`

const CircleContainer = styled.div`
	width: 100vw;	
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: absolute;
	top: 85vh;
`

const Circle = styled.img`
	margin: 10px;
`

const SpectrumWrapper = styled.div`
	witdth: 100vw;
  	height: 100vh;
`;

class SpectrumLayout extends Component {

	constructor() {
	    super()
	    this.onLeft = this.onLeft.bind(this)
	    this.onRight = this.onRight.bind(this)
	    this.onCircle = this.onCircle.bind(this)
	}

	state = {
		box_index: 0,
		circle_index: 0,
		leftDisabled: true,
		rightDisabled: false,
		isMobile: window.innerWidth <= mobileSize,
	}

	componentWillMount() {
	    window.addEventListener("resize", this.handleWindowSizeChange);
	}

	componentWillUnmount() {
	    window.removeEventListener("resize", this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
	    this.setState({ isMobile: window.innerWidth <= mobileSize });
	};

	onLeft(){
		if (this.state.leftDisabled)
			return
		let current_index = this.state.box_index - 1
		let current_circle = this.state.circle_index -1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index === 0){
			this.setState({
				leftDisabled: true
			})
		}
		if (current_index === this.props.data.articles-2){
			this.setState({
				rightDisabled: false
			})
		}
		
	}

	onRight(){
		if (this.state.rightDisabled)
			return
		let current_index = this.state.box_index + 1
		let current_circle = this.state.circle_index + 1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})
		if (current_index === this.props.data.articles.length-1){
			this.setState({
				rightDisabled: true
			})
		}
		if (current_index === 1){
			this.setState({
				leftDisabled: false
			})
		}
	}

	onCircle = (i) => {
		let leftDisabled = false
		let rightDisabled = false
		if (i === this.props.data.articles.length-1){
		 	rightDisabled = true
		}
		else if (i === 0)
			leftDisabled = true

		this.setState({
			box_index: i,
			circle_index: i,
			leftDisabled: leftDisabled,
			rightDisabled: rightDisabled
		})
	}

	render(){

		// mobile components
		let boxes = this.props.data.articles.map ( (data,i) => 
			<SpectrumSlide title= {data.title} url={data.link} author={data.author} img_src={data.img} key = {i}/>
		)
		let circles = this.props.data.articles.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src = {filledCircle} onClick={ () => this.onCircle(i)} key={i}/>
				else 
					return <Circle src = {emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
			}
		)
		let leftArrow = <Arrow src={white_arrow} onClick={this.onLeft} left/> 
		let rightArrow = <Arrow src={white_arrow} onClick={this.onRight}/> 
		// mobile components-finished

		return (
	      [
	      <MobileAndTablet>
	        <ImageContainer>
				{leftArrow}
				{rightArrow}
				<BoxPanel translateValue = {this.state.box_index*(-100)}>
					{boxes}		
				</BoxPanel>
				<CircleContainer> {circles} </CircleContainer> 
			</ImageContainer>
	      </MobileAndTablet>,
	      
	      <Desktop>
				<SpectrumWrapper>
				<div style={{height: "20vh", marginLeft: "5vw",marginRight: "5vw"}}>
					<h3 style={{paddingTop: "5vh"}}>{this.props.data.name}</h3>
					<p style={{paddingTop: "2vh"}}>{this.props.data.blurb}</p>
				</div>
				<SpectrumSlider data = {this.props.data.articles}/>	
			</SpectrumWrapper>
	      </Desktop>
	      ]
	    )
	}
}

export default SpectrumLayout
