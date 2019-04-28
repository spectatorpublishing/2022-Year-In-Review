import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
    width: 100%;
    background-color: ${props => props.theme.indigo};
    color: ${props => props.theme.white};
    padding-top: 5%;
    padding-left: 20%;
    `;

const Column = styled.div`
  display: grid;
  grid-template-columns: 25% 25%;
  grid-gap: 5%;
  padding-top: 2%;
  `;
  
const Role = styled.div`
 color: ${props => props.theme.transparentWhite};
 padding-left: 5px;
 `;

const Line = styled.h4`
  display: flex;
  flex-direction: row;
`;

const footerHome = (props) =>{
  return (
    <div className="FooterHome">
        <Background>

        <h3>Design and Development Credits</h3>

          <Column>
          <h3>Developed By</h3>
          <h3>Designed By</h3>
          <Line>Name,<Role>Developer</Role></Line> 
          <Line>Name,<Role>Designer</Role></Line> 
          <Line>Name,<Role>Developer</Role></Line> 
          <Line>Name,<Role>Designer</Role></Line> 
          <Line>Name,<Role>Developer</Role></Line> 
          <Line>Name,<Role>Designer</Role></Line> 
          <Line>Name,<Role>Developer</Role></Line> 
          <Line>Name,<Role>Designer</Role></Line> 
          </Column>

        </Background>
         
    </div>
  );
}

export default footerHome;
