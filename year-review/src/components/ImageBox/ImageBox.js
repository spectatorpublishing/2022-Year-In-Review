import React, { Component } from "react";
import styled from "styled-components";

const Flipcard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  -webkit-perspective: 1000px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;

  :hover{
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    transition: transform 0.8s;
	}

`;

const Inner = styled.div`
	position: relative;
	text-align: center;

`;

const Front = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${({front_image}) => front_image});
  background-size: cover;
  position: absolute;
  backface-visibility: hidden;

`;

const Back = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${({back_image}) => back_image});
  background-size: cover;
  color: white;
  position: absolute;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  
`;

const FrontAuthor = styled.h1`
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 175px;
  font-size: 40px;
  color: white;
`;


const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  color: white;
`;

const Header = styled.p`
  text-align: left;
  font-size: small;
  margin-right: 20px;
  margin-top: 30px;
  display: flex;
  color: white;
`;

const Body = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  font-style: italic;
  color: white;
`;

const Section = styled.div`
  font-weight: bold;
  color: white;
`;

const Author = styled.div`
  margin-left: 20px;
  padding-right: 5px;
  color: white;

`;


const ImageBox = (props) => {
  return (
    <div>
      {
        props.flip_data.map((data) => {
        return (
          <Flipcard>
            <Inner>
              <Front {...data}>
                <FrontAuthor>{data.author}</FrontAuthor>
              </Front>
              <Back {...data}>
                <Header>
                  <Author>{data.author}</Author>
                  <Section>{data.section}</Section>
                </Header>
                <Title>{data.title}</Title> 
                <Body>{data.body}</Body> 
              </Back>
            </Inner>
          </Flipcard>
          );
        }
      )
      }
    </div>

  )
} 

export default ImageBox;	
