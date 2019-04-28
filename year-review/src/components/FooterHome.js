import React from 'react';
import styled from 'styled-components';

const Credits = styled.h1`
  color: white;
  `;

const Column = styled.div`
    float: left;
    width: 50%
    padding: 10px;
`;

// const Design = styled.div`
//     float: center;
//     width: 50%
//     padding: 10px;
// `;

const Title = styled.h1`
  font-size: 20px;
  margin: 0px;
  color: white;
  `;

const Names = styled.p`
  color: white;
  `;

const Role = styled.p`
  color: grey;
  `;

const Background = styled.div`
  background: black;
  height: 200px;
  `;
  
const footerHome = (props) =>{
  return (
    <div className="PageIntro">
        <Background>
        <Credits><h1>Design and Development Credits</h1></Credits>
        
        <Column>
            <Title>Developed By</Title>
            <Names>Name, </Names> 
            <Role>Developer</Role> 
        </Column>
        <Column>
            <Title>Designed By</Title>
            <Names>Name, </Names> 
            <Role>Designer</Role> 
        </Column>
         
        </Background>    
    </div>
  );
}

export default footerHome;
