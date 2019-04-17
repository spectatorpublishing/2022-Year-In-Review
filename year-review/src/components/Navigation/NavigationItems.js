import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.ul`
	list-style-type: none;
  	margin: 0;
  	padding: 0;
  	overflow: hidden;
  	background-color: #333;
`

const NavList= styled.li`
  	float: left;
  	a {
	  display: block;
	  color: white;
	  text-align: center;
	  padding: 14px 16px;
	  text-decoration: none;
	}
`

const navigationItems = (props) =>(
	<NavBar>
		<NavList><NavLink to="/home" exact>HOME</NavLink></NavList>
		<NavList ><NavLink to="/news">NEWS</NavLink></NavList>
		<NavList ><NavLink to="/opinion">OPINION</NavLink></NavList>
		<NavList ><NavLink to="/eye">THE EYE</NavLink></NavList>
	</NavBar>
)

export default navigationItems;