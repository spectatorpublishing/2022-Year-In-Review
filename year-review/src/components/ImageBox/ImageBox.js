import React, { Component } from "react";
import styled from "styled-components";

const Flipcard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;

  &:hover{
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    transform-style: preserve-3d;
	}

`;

const Inner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
  transform-style: preserve-3d;

`;

const Front = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  height: 100%;
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  backface-visibility: hidden;

`;

const Back = styled.div`
  background-image: url("https://pbs.twimg.com/profile_images/562725426833784832/X-RMqMez.png");
  width: 100%;
  height: 100%;
  color: white;
  position: absolute;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  backface-visibility: hidden;

`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
`;

const Header = styled.p`
  text-align: left;
  font-size: small;
  margin-right: 20px;
  margin-top: 30px;
  display: flex;
`;

const Body = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  font-style: italic;
`;

const Section = styled.div`
  font-weight: bold;
`;

const Author = styled.div`
  margin-left: 20px;
  padding-right: 5px;

`;

export default class ImageBox1 extends Component {
  render() {
    return (
    	<Flipcard>
  			<Inner>
    			<Front>
      				<Img src = "http://www.availableideas.com/wp-content/uploads/2015/07/flowers-wallpapers-hd-desktop-beautiful-back-grounds.jpg"/> 
              <h1>Ben LaZebnik</h1>
    			</Front>
    			<Back>
            <Header>
              <Author>Ben LaZebnik</Author>
              <Section>| YOU HAVE MY WORD</Section>
            </Header>
			      <Title>Disconnected from death</Title> 
			      <Body>"colleges like columbia-and most of modern society-are wrapped up with the concerns of the physical world and thus have a tendency to see the end goal as material wealth..."</Body> 
    			</Back>
  			</Inner>
		</Flipcard>
    	);
	}
}