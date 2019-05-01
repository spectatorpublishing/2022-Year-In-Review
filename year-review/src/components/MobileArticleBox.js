import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  text-align: left;
`
const Title = styled.h5` 
  bottom: 10%;
  margin: 3%;
  width: 60vw;
  margin: 20vw;
  color: white;
`

// const Link = styled.a`
// 	text-decoration: none;
// 	color: white;
// `

const article = (props) =>{
  return (
    <Article>
      <Title>{props.title}</Title>
    </Article>
  );
}

export default article;