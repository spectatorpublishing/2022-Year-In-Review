import React, {Component} from 'react';
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import Article from '../components/Article'
import MobileArticleBox from '../components/MobileArticleBox'
import white_arrow from '../assets/right_arrow.svg'
import black_arrow from '../assets/left_arrow.svg'
import filledCircle from '../assets/filledCircle.png'
import emptyCircle from '../assets/emptyCircle.png'

const number = 3

const mobileSize = 992

const ImageContainer = styled.div`
	width: 60vw;	
	display: flex;
	overflow: hidden;
`
const MobileContainer = styled.div`
	background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${({img_src}) => img_src});
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow: hidden;
	position: relative;
`
const BoxPanel = styled.div` 
	display: flex;
	width: ${props => props.isMobile ? 100 : 57}vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`
const Arrow = styled.img`
	width: 20px;
  	z-index: 1;
  	outline: none;
  	transform: ${props => props.right ? "rotate(180deg)" : ""};
`

const LeftArrow = styled.img`
	transform: rotate(180deg);
	width: 5vw;
	z-index: 1;
	position: absolute;
	top: 52.5vh;
	left: 5vw;
`
const RightArrow = styled.img`
	width: 5vw;
	z-index: 1;
	position: absolute;
	top: 52.5vh;
	right: 5vw;
`
const CircleContainer = styled.div`
	width: ${props => props.isMobile ? 100 : 60}vw;
	height: 5vh;	
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: absolute;
	bottom: 5vh;
`
const Circle = styled.img`
	margin: 10px;
`

class ImageBoxSlider extends Component {

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
		let n = number
		if (this.state.isMobile)
			n = 1
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
		if (current_index === this.props.data.length-n-1){
			this.setState({
				rightDisabled: false
			})
		}
		
	}

	onRight(){
		if (this.state.rightDisabled)
			return
		let n = number
		if (this.state.isMobile)
			n = 1
		let current_index = this.state.box_index + 1
		let current_circle = this.state.circle_index + 1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index === this.props.data.length-n){
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
		let n = number
		if (this.state.isMobile)
			n = 1
		let leftDisabled = false
		let rightDisabled = false
		if (i === this.props.data.length-n){
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
		let n = number
		let boxes = this.props.data.map ( (data,i) => {
				if (this.props.selected === i){
					return (<Article 
					onClick = {() => this.props.handleClick(i)}
					img_src={data.img_src} selected key = {i}/>)
				} else {
					return (<Article title= {data.title} author={data.author} 
					onClick = {() => this.props.handleClick(i)} 
					description={data.description} img_src={data.img_src} key = {i}/>)
				}
			}
		)

		// let leftArrow =  <Arrow /> 
		// let rightArrow = <Arrow /> 
		// if (!this.state.leftDisabled)
			let leftArrow = <Arrow src={black_arrow} onClick={this.onLeft}/> 
		// if (!this.state.rightDisabled)
			let rightArrow = <Arrow src={black_arrow} onClick={this.onRight} right/> 

		if (this.state.isMobile){
			n = 1
			boxes = this.props.data.map ( (data,i) => 
				<MobileArticleBox description={data.description}  left = {i*100}
			 	title= {data.title} author={data.author} url={data.url} key = {i}/>)
			// if (!this.state.leftDisabled)
				leftArrow = <LeftArrow src={white_arrow} onClick={this.onLeft}/> 
			// if (!this.state.rightDisabled)
				rightArrow = <RightArrow src={white_arrow} onClick={this.onRight}/> 
		}

		let circles = this.props.data.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src = {filledCircle} onClick={ () => this.onCircle(i)} key={i}/>
				else if (i<this.props.data.length-n+1)
					return <Circle src = {emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
				return
			}
		)

		return (
		[
	      <MobileAndTablet>
	        <div >
	        	<MobileContainer img_src = {this.props.data[this.state.box_index].img_src}>
					<BoxPanel translateValue = {this.state.box_index*(-100)}>
						{boxes}		
					</BoxPanel>
					{leftArrow}
					{rightArrow}
					<CircleContainer isMobile> {circles} </CircleContainer> 
				</MobileContainer>
				
				
			</div>
	      </MobileAndTablet>,
	      
	      <Desktop>
			<div>
				<ImageContainer>
					{leftArrow}
					<BoxPanel translateValue = {this.state.box_index*(-19)}>
						{boxes}		
					</BoxPanel>
					{rightArrow}
				</ImageContainer>
				<CircleContainer> {circles} </CircleContainer> 
			</div>
		  </Desktop>
        ]
		)
	}
}

export default ImageBoxSlider
