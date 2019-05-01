import React from 'react';
import styled from 'styled-components';
import { lightbox } from 'styled-components';
import scroll from '../assets/scroll.svg';

const Image = styled.div`
  background-image: url(${({img_src}) => img_src});
  height: 100vh;
  width: 100vw;
  `;

const Heading1 = styled.h1`
  font-size: 100px;
  padding-top: 140px;
  text-align: center;
  color: ${props => props.theme.white};
  `;

const Text1 = styled.p`
  font-size: 15px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  color: ${props => props.theme.white};
  `;

const Title2 = styled.h1`
  font-size: 100px;
  text-align: center;
  padding-top: 80px;
  color: ${props => props.theme.white};
  `;

const Text2 = styled.p`
  font-size: 15px;
  text-align: center;
  padding-top: 40px;
  color: ${props => props.theme.white};
  `;

// const Image = styled.div`
//   background-image: url(${({img_src}) => img_src});
//   height: 50vh;
//   `;
// const Background = styled.div`
//   background: lightblue;
//   height: 45vh;
//   `;
const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  margin-top: 100px;
  `;

const Background = styled.div`
  background: ${props => props.theme.indigo};
  height: 100vh;
  width: 100vw;
  `;

const pageIntro = (props) =>{
  return (
    <div>
        <Image {...props}>
          <Heading1>{props.title1}</Heading1>
          <Text1>{props.text1}</Text1>
        </Image>
        <Background>
        <Title2>{props.title2}</Title2>
        <Text2>{props.text2}</Text2>  
        </Background>    
    </div>
  );
}

export default pageIntro;
