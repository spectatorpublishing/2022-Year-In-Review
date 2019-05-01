import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  margin: 2vw;
`
const Image = styled.div`
  background-image: ${({selected}) => selected ? "" : "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )," } url(${({img_src}) => img_src});
	width: 15vw;
	height: 30vh;
	object-fit: cover;
  text-align: left;
  border-radius: 25px;
`
const Title = styled.h5`
	position: absolute; 
  bottom: 10%;
  margin: 3%;
  width: 10vw;
  color:white;
`

// const Link = styled.a`
// 	text-decoration: none;
// 	color: white;
// `

const article = (props) =>{
  return (
    <Article>
      <Image {...props}>
          <Title>{props.title}</Title>
      </Image>
    </Article>
  );
}

export default article;