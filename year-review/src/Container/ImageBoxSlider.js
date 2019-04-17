import React, {Component} from 'react';
import styled from 'styled-components'
import Article from '../components/Article'

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

const BoxPanel = styled.div`
	display: flex;
`
const Button = styled.button`
	color: black	
	&:hover {
    	background: #555;
  	}
  	&:disabled {
    	background: #555;
  	}
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
		let filterdata = data.filter( (data, i) => 
			i>= this.state.box_index && i <= this.state.box_index+n-1)
		let boxes = filterdata.map ( (data,i) => <Article title= {data.title} author={data.author} url={data.url} img_src={data.img_src} key = {i}/>)

		return (
			<BoxPanel>
				<Button onClick = {this.onLeft} disabled={this.state.leftDisabled}> Left </Button>
				{boxes}	
				<Button onClick = {this.onRight} disabled={this.state.rightDisabled}> Right </Button>
			</BoxPanel>
			
		)
	}
}

export default ImageBoxSlider
