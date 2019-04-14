import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
    background-image: url(${({img_src}) => img_src});
	width: 100%;
	height: auto;
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
    <div className="Article">
        <Link href={props.url}>
            <Image {...this.props}>
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </Image>
        </Link>
    </div>
  );
}

export default article;
