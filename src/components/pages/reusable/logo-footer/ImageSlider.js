import React, { useState } from "react"
import styled from "styled-components"
import Image from "./Image"

const MenuImageSlider = ({ assets, slideLive, setSlideLive}) => {

  return (
    <MenuImageSliderContainer>

      {assets.map((image, i) => (
       (
            <Image 
            
            slideLive={slideLive}
            slideId={i + 1}
           
            setSlideLive={setSlideLive}
            fluid={image.fluid}
        title={image.description}
            />
          )
      ))}
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
