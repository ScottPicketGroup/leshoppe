import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { P} from '../../../../../styled-components/GlobalStyles'
const Slider = ({images, selected, setSelected}) => {
    console.log(images)
    const image = getImage(images[selected].image.localFile.childImageSharp)
    return (
        <>
        <ProductSlider>
            <ImageSlide>

            <Image image={image} aspectRatio={4/3}/>
            </ImageSlide>
            
            
           
        </ProductSlider>
        
        <NavigationContainer>
        <ImageDescriotion>{images[selected].title}</ImageDescriotion>
        {images.length !== 1 ? (
               <Buttons selected={selected} setSelected={setSelected} limit={images.length}/>
          
        ): null}
       
        </NavigationContainer>
       
        </>
    )
}

export default Slider

export const ProductSlider = styled.div`


background: white;
aspect-ratio: 4/3;

display: flex;



`
export const ImageSlide = styled.div`
overflow: hidden;
max-height: 100%;
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: -8rem;
`
export const Image = styled(GatsbyImage)`
aspect-ratio: 4/3;
max-height: 100%;
max-width: 100%;
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