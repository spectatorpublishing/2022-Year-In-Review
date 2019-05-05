import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  margin: 2.5vh 2.5vw;

`
const Title = styled.h5`
    font-weight:bold;
    font-size: 1rem;
    @media (max-width: 700px){
        font-size: 1rem;
    }
`

const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    width: 25rem;

    @media (max-width: 700px) {
        width: 100%;
  }

`

const Image = styled.img`
        margin-right: 1rem;
        width: 40%;
        height: 40%;
		object-fit: contain;
		align-self: flex-start;
        @media(max-width: 700px){
            margin-right: 0.8rem;
        }

`
const Text = styled.div`
    margin-top: 1rem;
    flex: 1 1 auto;
    @media(max-width: 700px){
        margin-top: 0.7rem;
    }    

`

const Desc = styled.div`
    font-size: 0.75rem;
    margin-top: 1rem;
    @media(max-width: 700px){
        margin-top: 1rem;
    }
    text-overflow: ellipsis;

`





const articlebox = (props) => {
    return (
        <Container onClick={() => window.open(props.url, "_blank")}>
              <Image src ={props.image}></Image>
                <Text>
                    <Title>{props.title}</Title>
                    <Desc>{props.author}</Desc>
                </Text>
        </Container>
            );
}

export default articlebox;