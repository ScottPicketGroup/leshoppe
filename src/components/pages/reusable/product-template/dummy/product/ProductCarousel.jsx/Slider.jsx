import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import {P} from '../../../../../../styled-components/GlobalStyles'
const Slider = ({image}) => {
    return (
        <>
        <ProductSlider>
            <ImageSlide>
            <Image src={image} />
            
            </ImageSlide>
            <ImageSlide>
            <Image src={image} style={{marginLeft: `5rem`}}/>
            
            </ImageSlide>
            
           
        </ProductSlider>
        <NavigationContainer>
        <ImageDescriotion>Lorem, ipsum dolor.</ImageDescriotion>
        <Buttons/>
        </NavigationContainer>
       
        </>
    )
}

export default Slider

export const ProductSlider = styled.div`

min-width: 100%;
background: white;
aspect-ratio: 4/3;

display: flex;



`
export const ImageSlide = styled.div`
min-width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: -8rem;
`
export const Image = styled.img`
max-height: 100%;
`

export const ImageDescriotion = styled(P)`

`

export const NavigationContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
margin-top: 1.75rem;
`