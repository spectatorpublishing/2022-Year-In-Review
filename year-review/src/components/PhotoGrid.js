import React from 'react'
import styled from 'styled-components'
import ImageBox from './ImageBox/ImageBox'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const Grid = styled.div`
    display: grid;

    @media only screen and (min-width:992px){
        grid-template-columns: 25% 25% 25% 25%;
        grid-auto-rows: 50%; 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    @media only screen and (max-width: 991px){
        grid-template-columns: 50% 50%;
        grid-auto-rows: 50vw; 
        grid-column-gap: 3px;
        grid-row-gap: 3px;
    }

`;

function PhotoGrid(props){
    const grid = props.data.map((data, i) => <ImageBox key={i} data={data}/>);
    return (
		<div>
			<Grid>{grid}</Grid>
		</div>
    ); 
 
}
export default PhotoGrid;

