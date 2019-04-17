import React, {Component} from 'react';
import styled from 'styled-components'


const testdata = ["test1","test2", "test3", "test4", "test5"]
const n = 3

const BoxPanel = styled.div`
	float: left;
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

const Tester = (props) =>{
	return <p> {props.text} </p>
} 


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
		if (current_index == testdata.length-n-1){
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

		if (current_index == testdata.length-n){
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
		let filterdata = testdata.filter( (text, i) => 
			i>= this.state.box_index && i <= this.state.box_index+n-1)
		let test = filterdata.map ( (text,i) => <Tester text = {text} key = {i}/>)

		return (
			<BoxPanel>
				{test}
				<Button onClick = {this.onLeft} disabled={this.state.leftDisabled}> Left </Button>
				<Button onClick = {this.onRight} disabled={this.state.rightDisabled}> Right </Button>
			</BoxPanel>
			
		)
	}
}

export default ImageBoxSlider
