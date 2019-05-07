import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
  width: 100%;
  background-color: ${props => props.theme.indigo};
  color: ${props => props.theme.white};
  padding-top: 5vh;
`;

const Names = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const Heading = styled.h3`
  text-align: center;
  padding: 1rem 0;
`
const Column = styled.div`
  padding-top: 1rem;
`;
const RoleHeading = styled.h4`
  margin: 0.8rem 0;
`
const Role = styled.div`
 color: ${props => props.theme.transparentWhite};
 padding-left: 0.5rem;
`;
const Line = styled.h5`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
`;

const footerHome = (props) =>{
  return (
    <div className="FooterHome">
        <Background>

        <Heading>Design and Development Credits</Heading>

        <Names>
          <Column>
            <RoleHeading>Designed By</RoleHeading>
            <Line>Shannon Hui, <Role>Lead Product Designer</Role></Line> 
            <Line>David Wang, <Role>Product Designer</Role></Line> 
            <Line>Kevin Li, <Role>Head of Product</Role></Line> 
          </Column>

          <Column>
            <RoleHeading>Developed By</RoleHeading>
            <Line>David Li, <Role>Lead Developer</Role></Line> 
            <Line>Stacy Tao, <Role>Developer</Role></Line> 
            <Line>Amina Assal, <Role>Developer</Role></Line> 
            <Line>Julie Song, <Role>Developer</Role></Line> 
          </Column>
          <Column>
            <RoleHeading>&nbsp;</RoleHeading>
            <Line>Wendy Wang, <Role>Developer</Role></Line> 
            <Line>Yunsu Kim, <Role>Developer</Role></Line> 
            <Line>Arsalaan Ansari, <Role>Head of Engineering</Role></Line> 
          </Column>
        </Names>

        </Background>
         
    </div>
  );
}

export default footerHome;
