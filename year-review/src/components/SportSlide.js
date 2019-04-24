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

const Text = styled.div `
  border: none;
  padding: 5px;
  font: sans-serif;
  width: 100px;
  height: 200px;
  overflow: scroll;
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
                <Text> 
                  Efficient honorificabilitudinitatibus cross-media information without floccinaucinihilipilification cross-media value. Quickly maximize timely deliverables for real-time schemas plenipotentiary. 
                </Text>
            </Image>
        </Link>
    </Article>
  );
}

export default slide;
