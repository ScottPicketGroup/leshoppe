import React, {useRef} from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import {P} from '../../../../../../styled-components/GlobalStyles'

import Title from './Title'


const Image = ({fluid, zIndex, slideLive, title}) => {
    
    return (
        <ImageBox
        transform={`translateX(${60  * slideLive }vw)`}
        >
        <SliderImage 
        fluid={fluid}
        zIndex={zIndex +1}
        
        />
        {slideLive * slideLive + 1 === zIndex  ? (
           
<Title 
imgTitle={title}/>
) : null}
        </ImageBox>
    )
}

export default Image

export const ImageBox = styled.div`
width: 60vw;
height: 100%;
transition: transform 1s ease-in-out;

z-index: ${props => props.zIndex};
transform: ${props => props.transform};
`
export const SliderImage= styled(Img)`
width: 60vw;
height: 100%;
`   
