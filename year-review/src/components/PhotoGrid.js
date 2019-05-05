import React from 'react'
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

const Grid = styled.div`
    display: grid;

    @media only screen and (min-width: 768px){
        grid-template-columns: 25% 25% 25% 25%;
        grid-auto-rows: 50%; 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    @media only screen and (max-width: 767px){
        grid-template-columns: 50% 50%;
        grid-auto-rows: 50vw; 
        grid-column-gap: 0px;
        grid-row-gap:0px;
    }

`;

function PhotoGrid(props){
    return (
		<div>

		</div>
    ); 
 
}
export default PhotoGrid;

