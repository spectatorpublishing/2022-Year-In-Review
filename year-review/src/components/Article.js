import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  margin: 2vw;
`
const Image = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${({img_src}) => img_src});
	width: 15vw;
	height: 30vh;
	object-fit: cover;
  text-align: center;
  border-radius: 25px;
`
const Title = styled.h3`
	position: absolute;
  bottom: 10%;
  margin: 5% 5%;
`

const Link = styled.a`
	text-decoration: none;
	color: white;
`

const article = (props) =>{
  return (
    <Article>
        <Link href={props.url}>
            <Image {...props}>
                <Title>{props.title}</Title>
            </Image>
        </Link>
    </Article>
  );
}

export default article;