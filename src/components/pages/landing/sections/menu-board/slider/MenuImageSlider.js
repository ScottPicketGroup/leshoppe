import React, { useState } from "react"
import styled from "styled-components"
import Image from "./slider-components/Image"

import Video from "./slider-components/Video"
const MenuImageSlider = ({ assets, slideLive, setSlideLive, setTitle }) => {
console.log(assets)
  return (
    <MenuImageSliderContainer>
      
      <Container>

      
      {/* {assets.map((image, i) => (
       (
        <Image 
        setTitle={setTitle}
        slideLive={slideLive}
        slideId={i - 1}
        zIndex={i + 1}
        setSlideLive={setSlideLive}
        fluid={image.fluid}
    title={image.description}
        />   
       )))} */}
       </Container>
    </MenuImageSliderContainer>
  )
}

export default MenuImageSlider

export const MenuImageSliderContainer = styled.div`
  width: 100%;
  position: relative;
  height: 35.3vw;
  padding: 0;
  display: flex;
  
`
export const Container = styled.div`
height: 100%;
width: 100%;
background: green;
transform: ${({ currentImage, image, position }) => `translateX(-${position * 58}%)` } ;
`