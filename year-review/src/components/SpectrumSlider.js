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
	z-index: 5;
`;

const ColumnWrapper = styled.div`
	display: flex;
	width: 100vw;
	overflow: hidden;
	position: relative;

`;

const Contain = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: row;
	transform: translate(${({translateValue}) => translateValue}vw);
`;

const Column = styled.div`
	display: flex;
	width: 25vw;
	height: 75vh;
	background-image: url(${({img_src}) => img_src});
	text-align: center;
  background-position: center;
`;

const Title = styled.h4`
	margin-top: 3px;
	color: black;
	position: relative;
	width: 25vw;
	padding: 2vw;
	top: 20%;
`;

class SpectrumSlider extends Component{
	constructor(props) {
		super(props);
	
		this.state = {
			index: 0,
			leftDisabled: true,
			rightDisabled: false,
		}

		this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
		this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
	  }

	handleLeftArrowClick() {

		if (this.state.index > 0) {
			this.setState({ index: this.state.index - 1});
		} 
		else {
			this.setState({ index: this.props.data.length - 4});

		}
	}

	handleRightArrowClick() {
		if (this.state.index + 4 < this.props.data.length) {
			this.setState({ index: this.state.index + 1 });

		} 
		else {
			this.setState({ index: 0 });
		}
	}

	render(){
		const grid = this.props.data.map((data, i) => {
			return (
			<Column img_src={data.img} key={i} index={i} 
				onClick = {() => this.handleClick(data.link)}>
					<Title>{data.title}</Title>
			</Column>
			)
		});

		return (
			<ColumnWrapper>
				<Contain translateValue={this.state.index*(-25)}> {grid}</Contain>
				<LeftArrow onClick={this.handleLeftArrowClick} />
				<RightArrow onClick={this.handleRightArrowClick} />
			</ColumnWrapper>		

		);
	} 
    
 
}
export default SpectrumSlider;

