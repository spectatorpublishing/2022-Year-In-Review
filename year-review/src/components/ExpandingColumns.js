import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'

const Contain = styled.div`
    display: flex;  
  	flex-flow: row wrap;
  	width: 80vw;
  	height: 100vh;
  	margin-left: 10vw;
  	margin-right: 10vw;
`;

const Column = styled.div`
	overflow: hidden;
	margin: 0px;
	background-image: url(${({img_src}) => img_src});
	text-align: center;
    transition: width 0.5s;
    background-position: center;
	width: ${props => props.hover === -1? '25%' : props.index === props.hover? '55%' : "15%"};
	filter: ${props => props.hover === -1? 'grayscale(0%)' : props.index === props.hover ? 'grayscale(0%)' : 'grayscale(100%)'};
	@media only screen and (max-width: 600px){
		width: ${props => props.hover === -1? '100%' : props.index === props.hover? '100%' : "100%"};
	}
`

const Title = styled.h3`
	margin-top: 3px;
	color: black;
	position: relative;
	top: 20%;
`

class ExpandingColumns extends Component{

	constructor() {
	    super()
	    this.onHover = this.onHover.bind(this)
	    this.onStopHover = this.onStopHover.bind(this)
	}

	state = {
		hover: -1
	}

	onHover(i) {
		this.setState({
			hover: i
		})
	}

	onStopHover() {
		this.setState({
			hover: -1
		})
	}

	handleClick(link) {
		this.props.history.push(link)
	}

	render(){
		const grid = this.props.data.map((data, i) => {
			return (
				<Column img_src={data.img_src} key={i} index={i} 
					hover={this.state.hover}
					onMouseEnter={() => this.onHover(i)}
		    		onMouseLeave={this.onStopHover}
		    		onClick = {() => this.handleClick(data.link)}>
	                <Title>{data.title}</Title>
	    		</Column>
	    		
    		)
		});

		return (
		    <Contain>{grid}</Contain>
		);
	} 
    
 
}
export default withRouter(ExpandingColumns);

