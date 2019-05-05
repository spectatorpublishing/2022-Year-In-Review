import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
import styled from 'styled-components'

const Contain = styled.div`
    display: flex;  
  	flex-flow: row wrap;
  	width: 100vw;
  	height: 100vh;
`;

const Column = styled.a`
	overflow: hidden;
	display: flex;
	justify-content: center;
	margin: 0px;
	background-image: url(${({img_src}) => img_src});
	text-decoration: none;
    transition: width 0.5s;
    background-position: center;
    background-size: cover;
	width: ${props => props.hover === -1? '25%' : props.index === props.hover? '55%' : "15%"};
	filter: ${props => props.hover === -1? 'grayscale(0%)' : props.index === props.hover ? 'grayscale(0%)' : 'grayscale(100%)'};
	@media only screen and (max-width: 992px){
		width: ${props => props.hover === -1? '100%' : props.index === props.hover? '100%' : "100%"};
	}
`

const TitleMobile = styled.h3`
	color: ${props => props.theme.white};
	text-shadow: ${props => props.theme.shadow};
	text-align: center;
	position: relative;
	top: 50%;
`

const TitleDesktop = styled.h4`
	color: ${props => props.theme.white};
	text-shadow: ${props => props.theme.shadow};
	text-align: center;
	position: relative;
	top: 70%;
	width: 15vw;
`

class ExpandingColumns extends Component {
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

	render(){
		const grid = this.props.data.map((data, i) => {
			return (
				<Column img_src={data.img_src} key={i} index={i} 
					hover={this.state.hover}
					onMouseEnter={() => this.onHover(i)}
					onMouseLeave={this.onStopHover}
					href={"opinion"+data.link}
				>
					<MobileAndTablet>
						<TitleMobile>{data.name}</TitleMobile>
					</MobileAndTablet>
					<Desktop>
						<TitleDesktop>{data.name}</TitleDesktop>
					</Desktop>
	    		</Column>
	    		
    		)
		});

		return (
		    <Contain>{grid}</Contain>
		);
	} 
    
 
}
export default withRouter(ExpandingColumns);

