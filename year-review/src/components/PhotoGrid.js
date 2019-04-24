import React from 'react'
import styled from 'styled-components'
import ImageBox from './ImageBox/ImageBox'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50% 50%; 
`;

function PhotoGrid(props){
    const grid = props.data.map((data, i) => <ImageBox key={i}/>);
    return (
        <Grid>{grid}</Grid>
    );
 
}
export default PhotoGrid;

