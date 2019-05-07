import React from 'react'
import styled from 'styled-components'
import read_more from '../assets/readmore.svg'

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

const Logo = styled.img`
  display: block;
  width: 15vw;
  position: absolute;
  left: -15vw;
  border: 2px solid white;
  border-radius: 5px;
  padding-top: 5px;
  padding-left: 0px;
  padding-right: -2px;
`
  
const Link = styled.a`
  text-decoration: none;
  position: absolute;
  left: 80vw;
  top: 70%;
`

const slide = (props) =>{
  return (
    <Article>
        <Image {...props}>
            <Title>{props.title}</Title>
            <Link href={props.url}><Logo src={read_more} alt="readmore"/> </Link>
        </Image>
    </Article>
  );
}

export default slide;
