import React, {Component} from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../assets/right_arrow.svg';

const RightArrow = styled(Arrow)`
  & path {
    stroke: ${props => props.theme.transparentWhite};
  }

  &:hover path {
    stroke: ${props => props.theme.white};
  }
`;
const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`;

const Contain = styled.div`
display: flex;
flex-direction: row;
`;

const Column = styled.div`
	display: flex;
	width: 25vw;
	height: 100vh;
	background-image: url(${({img_src}) => img_src});
	text-align: center;
    background-position: center;
`

const Title = styled.h3`
	margin-top: 3px;
	color: black;
	position: relative;
	top: 20%;
`

class SpectrumSlider extends Component{
	constructor(props) {
		super(props);
	
		this.state = {
		  index: this.props.index || 0,
		  width: window.innerWidth
		}

		this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
		this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
	  }  

	handleClick(link) {
		this.props.history.push(link)
	}

	handleKeyDown(e) {
		switch (e.key) {
		  case "ArrowLeft":
			this.handleLeftArrowClick();
			break;
		  case "ArrowRight":
			this.handleRightArrowClick();
			break;
		  case "Escape":
			this.props.onCloyarse();
			break;
		  default:
			break;
		}
	  }

	  handleLeftArrowClick() {
		if (this.state.index > 0) {
		  this.setState({ index: this.state.index - 1});
		} else {
		  this.setState({ index: this.props.media.length - 1});
		}
	  }
	
	  handleRightArrowClick() {
		if (this.state.index + 1 < this.props.media.length) {
		  this.setState({ index: this.state.index + 1 });
		} else {
		  this.setState({ index: 0 });
		}
	  }

	render(){
		const grid = this.props.data.map((data, i) => {
			return (
				<Column img_src={data.img_src} key={i} index={i} 
		    		onClick = {() => this.handleClick(data.link)}>
	                <Title>{data.title}</Title>
	    		</Column>
	    		
    		)
		});

		return (
			<div>
		    <LeftArrow onClick={this.handleLeftArrowClick} /> 
				<Contain>{grid}</Contain> 
			<RightArrow onClick={this.handleRightArrowClick} />
			</div>
		);
	} 
    
 
}
export default SpectrumSlider;

// constructor(props) {
// 	super(props);

// 	this.state = {
// 	  index: this.props.index || 0,
// 	  width: window.innerWidth
// 	}

// 	this.handleKeyDown = this.handleKeyDown.bind(this);
// 	this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
// 	this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
// 	this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
//   }

// componentDidMount() {
// 	window.addEventListener("resize", this.handleWindowSizeChange);
// 	window.addEventListener("keydown", this.handleKeyDown);
// }

// componentWillUnmount() {
// 	window.removeEventListener("resize", this.handleWindowSizeChange);
// 	window.removeEventListener("keydown", this.handleKeyDown);
// }

// handleKeyDown(e) {
// 	switch (e.key) {
// 		case "ArrowLeft":
// 		this.handleLeftArrowClick();
// 		break;
// 	case "ArrowRight":
// 		this.handleRightArrowClick();
// 		break;
// 	case "Escape":
// 		this.props.onClose();
// 		break;
// 	default:
// 	break;
// 	}
// }

// handleWindowSizeChange() {
// 	this.setState({ width: window.innerWidth });
// }

// handleLeftArrowClick() {
// 	if (this.state.index > 0) {
// 		this.setState({ index: this.state.index - 1});
// 	} 
// 	else {
// 		this.setState({ index: this.props.media.length - 1});
// 	}
// }

// handleRightArrowClick() {
// 	if (this.state.index + 1 < this.props.media.length) {
// 		this.setState({ index: this.state.index + 1 });
// 	} 
// 	else {
// 		this.setState({ index: 0 });
// 	}
// }
