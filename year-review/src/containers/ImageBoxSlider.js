import React, {Component} from 'react';
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import Article from '../components/Article'
import left_arrow from '../assets/left_arrow.svg'
import right_arrow from '../assets/left_arrow.svg'
import filledCircle from '../assets/filledCircle.png'
import emptyCircle from '../assets/emptyCircle.png'

const n = 3

const ImageContainer = styled.div`
	width: 60vw;	
	display: flex;
	overflow: hidden;
`

const BoxPanel = styled.div`
	display: flex;
	width: 57vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`

const MobilePanel = styled.div`
	display: flex;
	width: 57vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`

const Arrow = styled.img`
	width: 20px;
  	z-index: 1;
`

const CircleContainer = styled.div`
	width: 60vw;	
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
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
		rightDisabled: false
	}

	onLeft(){
		let current_index = this.state.box_index - 1
		let current_circle = this.state.circle_index -1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index == 0){
			this.setState({
				leftDisabled: true
			})
		}
		if (current_index == this.props.data.length-n-1){
			this.setState({
				rightDisabled: false
			})
		}
		
	}

	onRight(){
		let current_index = this.state.box_index + 1
		let current_circle = this.state.circle_index + 1 
		this.setState({
			box_index: current_index,
			circle_index: current_circle
		})

		if (current_index == this.props.data.length-n){
			this.setState({
				rightDisabled: true
			})
		}
		if (current_index == 1){
			this.setState({
				leftDisabled: false
			})
		}
	}

	onCircle = (i) => {
		let leftDisabled = false
		let rightDisabled = false
		if (i==this.props.data.length-3){
		 	rightDisabled = true
		}
		else if (i==0)
			leftDisabled = true

		this.setState({
			box_index: i,
			circle_index: i,
			leftDisabled: leftDisabled,
			rightDisabled: rightDisabled
		})
	}

	render(){
		
		let boxes = this.props.data.map ( (data,i) => 
			<Article title= {data.title} author={data.author} 
			onClick = {() => this.props.handleClick(i)} img_src={data.img_src} key = {i}/>
		)
		let circles = this.props.data.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src = {filledCircle} onClick={ () => this.onCircle(i)} key={i}/>
				else if (i<this.props.data.length-2)
					return <Circle src = {emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
			}
		)

		let leftArrow =  <Arrow /> 
		let rightArrow = <Arrow /> 
		if (!this.state.leftDisabled)
			leftArrow = <Arrow src={left_arrow} onClick={this.onLeft}/> 
		if (!this.state.rightDisabled)
			rightArrow = <Arrow src={right_arrow} onClick={this.onRight}/> 

		return (
		[
	      <MobileAndTablet>
	        <div>
				{leftArrow}
				<BoxPanel translateValue = {this.state.box_index*(-100)}>
					{boxes}		
				</BoxPanel>
				{rightArrow}
				<CircleContainer> {circles} </CircleContainer> 
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
