import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: 50% 50%;    
    
`;

const Button = styled.button`
    background-color: lightblue;
    border-radius: 6px;
    font-size: 20px;
    padding: 20px 0px;
`;


function RightGrid(props){
    const articles = props.articles;
    const title = props.title;
    const grid = articles.map((article) =>

        <Button key={articles.toString()}>
            <a href={article}>{title}</a>
        </Button>
    );
    return (
        <Grid>{grid}</Grid>
    );
 
}
export default RightGrid;

