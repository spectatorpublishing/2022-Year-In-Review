import React, {Component} from 'react';
import styled from 'styled-components'
import Article from '../components/Article'
import arrow from '../assets/arrow.svg'

const data = 
[
	{
		title: "Title1",
		author: "Author1",
		url: "http://cs.columbia.edu",
		img_src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
	},
	{
		title: "Title2",
		author: "Author2",
		url: "http://cs.columbia.edu",
		img_src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
	},
	{
		title: "Title3",
		author: "Author3",
		url: "http://cs.columbia.edu",
		img_src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
	},
	{
		title: "Title4",
		author: "Author4",
		url: "http://cs.columbia.edu",
		img_src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
	},
	{
		title: "Title5",
		author: "Author5",
		url: "http://cs.columbia.edu",
		img_src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
	},
]
const n = 3

const Container = styled.div`
	background: #555;
	width: 610px;	
	display: flex;
	overflow: hidden;
`

const BoxPanel = styled.div`
	display: flex;
	width: 570px;
	transform: translate(${props => props.translateValue}px);
	
    transition: transform ease-out 0.45s;
`
const Arrow = styled.img`
	width: 20px;	
	background: #555;
	&:hover {
    	background: ${props => props.src? '#500' : '#555'};
  	}
  	z-index: 1
`

class ImageBoxSlider extends Component {

	constructor() {
	    super()
	    this.onLeft = this.onLeft.bind(this)
	    this.onRight = this.onRight.bind(this)
	}

	state = {
		box_index: 0,
		leftDisabled: true,
		rightDisabled: false
	}

	onLeft(){
		let current_index = this.state.box_index
		current_index = current_index - 1
		this.setState({
			box_index: current_index
		})

		if (current_index == 0){
			this.setState({
				leftDisabled: true
			})
		}
		if (current_index == data.length-n-1){
			this.setState({
				rightDisabled: false
			})
		}
		
	}

	onRight(){
		let current_index = this.state.box_index
		current_index = current_index + 1
		this.setState({
			box_index: current_index
		})

		if (current_index == data.length-n){
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

	render(){
		let boxes = data.map ( (data,i) => <Article title= {data.title} author={data.author} url={data.url} img_src={data.img_src} key = {i}/>)
		let leftArrow =  <Arrow /> 
		let rightArrow = <Arrow /> 
		if (!this.state.leftDisabled)
			leftArrow = <Arrow src={arrow} onClick={this.onLeft}/> 
		if (!this.state.rightDisabled)
			rightArrow = <Arrow src={arrow} onClick={this.onRight}/> 
		return (
			<Container>
				{leftArrow}
				<BoxPanel translateValue = {this.state.box_index*(-190)}>
					{boxes}		
				</BoxPanel>
				{rightArrow}
			</Container>
		)
	}
}

export default ImageBoxSlider
