import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50% 50%; 
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;


function PhotoGrid(props){
    const photos = props.photos;
    const grid = photos.map((photo) =>
        <div key={photos.toString()}>
            <img src={photo} alt="img" />
        </div>
    );
    return (
        <Grid>{grid}</Grid>
    );
 
}
export default PhotoGrid;

