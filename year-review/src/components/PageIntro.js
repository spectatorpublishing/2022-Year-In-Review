import React from 'react';
import styled from 'styled-components';

const Title1 = styled.h1`
  font-size: 30px;
  margin: 0px;
  text-align: center;
  `;

const Text1 = styled.p`
  font-size: 15px;
  text-align: center;
  `;

const Title2 = styled.h1`
  font-size: 30px;
  margin: 0px;
  `;

const Text2 = styled.p`
  font-size: 15px;
  `;

const Image = styled.div`
  background-image: url(${({img_src}) => img_src});
  height: 200px;
  `;
const Background = styled.div`
  background: lightblue;
  height: 200px;
  `;



const pageIntro = (props) =>{
  return (
    <div className="PageIntro">
      <Image {...props}>
      <Title1>{props.title1}</Title1>
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
