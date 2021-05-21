import React, { useState } from "react"
import styled from "styled-components"
import Image from "./slider-components/Image"

import Video from "./slider-components/Video"
const MenuImageSlider = ({ assets, slideLive, setSlideLive, setTitle }) => {
console.log(assets)
  return (
    <MenuImageSliderContainer>
      
      
      {assets.map((image, i) => (
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
       )))}
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
