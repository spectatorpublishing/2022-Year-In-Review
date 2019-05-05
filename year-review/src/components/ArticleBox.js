import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
  margin: 2.5vh 2.5vw;

`
const Title = styled.h5`
    font-weight:bold;
    font-size: 1rem;
    @media (max-width: 991px){
        font-size: 1rem;
    }
`

const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    width: 35vw;
    height: 20vh;

    @media (max-width: 991px) {
        width: 75vw;
        height: 15vh;
    }

`

const Image = styled.div`
        background-image: url(${({img_src}) => img_src});
        margin-right: 1rem;
        width: 15vw;
        height: 100%;
		object-fit: contain;
		align-self: flex-start;
        @media(max-width: 991px){
            margin-right: 0.8rem;
            width: 35vw;
            height: 100%;
        }

`
const Text = styled.div`
    width: 20vw;
    margin-top: 1rem;
    flex: 1 1 auto;
    @media(max-width: 991px){
        margin-top: 0.7rem;
        width: 40vw;
    }    

`

const Desc = styled.div`
    font-size: 0.75rem;
    margin-top: 1rem;
    @media(max-width: 991px){
        margin-top: 1rem;
    }
    text-overflow: ellipsis;

`





const articlebox = (props) => {
    return (
        <Article>
            <Container onClick={() => window.open(props.url, "_blank")}>
              <Image img_src ={props.img_src}></Image>
                <Text>
                    <Title>{props.title}</Title>
                    <Desc>{props.author}</Desc>
                </Text>
            </Container>
        </Article>
    );
}

export default articlebox;