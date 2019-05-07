import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/white-down-arrow-icon.png'

const Article = styled.div`
  margin: 0vw;
`
const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({img_src}) => img_src});
	width: 100vw;
	height: calc(100vh - 48px);
	object-fit: cover;
  background-size: cover;
  position: relative;
`
const Title = styled.h3`
  position: absolute;
	top: 40vh;
  color: white;
  padding: 0vh 10vw;
`

const Arrow = styled.img`
  width: 6vw;
  z-index: 1;
  position: absolute;
  left: 90%;
  top: 90%;
  transform: rotate(180deg);
`
  
const Link = styled.a`
  text-decoration: none;
  position: absolute;
  top: 80%;
  right: 10%;
  color: white;
  font-size: 25px;
`

const slide = (props) =>{
  return (
    <Article>
        <Image {...props}>
            <Title>{props.title}</Title>
            <Link href={props.url}>Read More</Link>
        </Image>
    </Article>
  );
}

export default slide;
