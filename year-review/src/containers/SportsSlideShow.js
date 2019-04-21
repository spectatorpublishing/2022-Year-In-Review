import React, {Component} from 'react';
import styled from 'styled-components'
import SportSlide from '../components/SportSlide'
import arrow from '../assets/arrow.svg'
import filledCircle from '../assets/filledCircle.png'
import emptyCircle from '../assets/emptyCircle.png'

const n = 1

const ImageContainer = styled.div`
	background: #555;
	width: 100vw;	
	display: flex;
	overflow: hidden;
`
const BoxPanel = styled.div`
	display: flex;
	width: 96vw;
	transform: translate(${props => props.translateValue}vw);
    transition: transform ease-out 0.45s;
`
const LeftArrow = styled.img`
  width: 2vw;
  &:hover {
      background: ${props => props.src? '#500' : '#555'};
    }
  z-index: 1;
  position: absolute;
  left: 0vw;
  bottom: 0vw;
`
const RightArrow = styled.img`
  width: 2vw;
  &:hover {
      background: ${props => props.src? '#500' : '#555'};
    }
  z-index: 1;
  position: absolute;
  right: 0vw;
  bottom: 0vw;
`

const CircleContainer = styled.div`
	width: 100vw;	
	background: #555;
	display: flex;
	
	justify-content: center;
	align-items: center;
	text-align: center;
`

const Circle = styled.img`
	margin: 10px;
`

class SportsSlideShow extends Component {

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
			<SportSlide title= {data.title} author={data.author} 
			url={data.url} img_src={data.img_src} key = {i}/>
		)
		let circles = this.props.data.map ( (_, i) => {
				if (i===this.state.circle_index)
					return <Circle src = {filledCircle} onClick={ () => this.onCircle(i)} key={i}/>
				else if (i<this.props.data.length)
					return <Circle src = {emptyCircle} onClick={() => this.onCircle(i)} key={i}/>
			}
		)

		let leftArrow =  this.state.leftDisabled ? null : <LeftArrow src={arrow} onClick={this.onLeft}/> 
		let rightArrow = this.state.rightDisabled ? null : <RightArrow src={arrow} onClick={this.onRight}/> 

		return (
			<div>
				<ImageContainer>
					{leftArrow}
					<BoxPanel translateValue = {this.state.box_index*(-100)}>
						{boxes}		
					</BoxPanel>
					{rightArrow}
				</ImageContainer>
				<CircleContainer> {circles} </CircleContainer> 
			</div>
		)
	}
}

export default SportsSlideShow
