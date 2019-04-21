import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/arrow.svg'

const Article = styled.div`
  margin: 0vw;
`
const Image = styled.div`
  background-image: url(${({img_src}) => img_src});
	width: 100vw;
	height: 100vw;
	object-fit: cover;
`
const Title = styled.h3`
	margin-top: -3px;
`

const Author = styled.p`
  color: white;
`

const Link = styled.a`
	text-decoration: none;
	color: white;
`

const slide = (props) =>{
  return (
    <Article>
        <Link href={props.url}>
            <Image {...props}>
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </Image>
        </Link>
    </Article>
  );
}

export default slide;
