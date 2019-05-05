import React, {Component} from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowR } from '../assets/right_arrow.svg';
import { ReactComponent as ArrowL } from '../assets/left_arrow.svg';

const RightArrow = styled(ArrowL)`
	transform: rotate(180deg);
	& path {
    stroke: ${props => props.theme.transparentWhite};
  }
  &:hover path {
    stroke: ${props => props.theme.white};
	}
	position: absolute;
	top: 50vh;
	left: 90vw;
`;

const LeftArrow = styled(ArrowL)`
	& path {
		stroke: ${props => props.theme.transparentWhite};
	}
	&:hover path {
		stroke: ${props => props.theme.white};
	}
	position: absolute;
	top: 50vh;
	left: 5vw;
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
`;

const ColumnWrapper = styled.div`
	display: flex;
	width: 100vw;
	overflow: hidden;
	transform: translate(${props => props.translateValue})vw;


`;

const Title = styled.h3`
	margin-top: 3px;
	color: black;
	position: relative;
	top: 20%;
`;

class SpectrumSlider extends Component{
	constructor(props) {
		super(props);
	
		this.state = {
		  index: 0,
		  width: window.innerWidth
		}

		this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
		this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
	  }

	handleLeftArrowClick() {
		if (this.state.index > 0) {
			this.setState({ index: this.state.index - 1});
		} 
		else {
			this.setState({ index: this.props.media.length - 1});
		}
	}

	handleRightArrowClick() {
		if (this.state.index + 1 < this.props.media.length) {
			this.setState({ index: this.state.index + 1 });
		} 
		else {
			this.setState({ index: 0 });
		}
	}

	render(){
		const grid = this.props.data.map((data, i) => {
			return (
				<>
				<Column img_src={data.img_src} key={i} index={i} 
					onClick = {() => this.handleClick(data.link)}>
						<Title>{data.title}</Title>
				</Column>
				<>
			)
		});

		return (
		  <div>  
				<LeftArrow onClick={() => this.handleLeftArrowClick} />
				<Contain> {grid}</Contain>	
				<RightArrow onClick={() => this.handleRightArrowClick} />
			</div>	

		);
	} 
    
 
}
export default SpectrumSlider;

