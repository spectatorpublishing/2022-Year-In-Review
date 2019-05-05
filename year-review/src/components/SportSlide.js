import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  margin: 0vw;
`
const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({img_src}) => img_src});
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`
const Title = styled.h3`
	textAlign: left;
  padding: 12vh 0vw 4vh 8vw;
  color: white;
  width: 60vw;
  margin-left: 3vw;
`

const Text = styled.div `
  border: none;
  overflow-y: scroll;
  overflow-x:hidden
  color: white;
  width: 80vw;
  height: 40vh;
  padding: 0vh 0vw 4vh 8vw;
  margin-left: 3vw;

  @media only screen and (max-width: 991px){
    height: 50vh;
  }

  /* width */
  ::-webkit-scrollbar {
    margin-left: 5px;
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
`

const Author = styled.p`
  textAlign: left;
  padding: 0vh 0vw 4vh 8vw;
  color: white;
  width: 60vw;
  margin-left: 3vw;
`

// const Link = styled.a`
// 	text-decoration: none;
// 	color: white;
// `

const slide = (props) =>{
  return (
    <Article>
        <Image {...props}>
            <Title>{props.title}</Title>
            <Author>BY {props.author.toUpperCase()}</Author>
            <Text> 
              <p style={{width: "75vw"}}>
                {props.text}
              </p> 
            </Text>
        </Image>
    </Article>
  );
}

export default slide;
