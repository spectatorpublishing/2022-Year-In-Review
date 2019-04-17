import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
    margin: 20px;
`
const Image = styled.div`
  background-image: url(${({img_src}) => img_src});
	width: 150px;
	height: 150px;
	object-fit: cover;
`
const Title = styled.h3`
	margin-top: -3px;
`

const Author = styled.p`
`

const Link = styled.a`
	text-decoration: none;
	color: black;
`

const article = (props) =>{
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

export default article;
