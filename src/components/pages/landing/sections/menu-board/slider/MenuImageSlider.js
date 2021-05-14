import React, { useState } from "react"
import styled from "styled-components"
import Image from "./slider-components/Image"

import Video from "./slider-components/Video"
const MenuImageSlider = ({ assets, slideLive, setSlideLive }) => {

  return (
    <MenuImageSliderContainer>
      {assets.map((image, i) => (
       <>
          {image.file.contentType === "text/html" ? (
            <Video
              slideLive={slideLive + 1}
              setSlideLive={setSlideLive}
              videoSrc={image.file.fileName}
              videoTitle={image.description}
              zIndex={i + 1}
             
            />
          ) : (
            <Image 
            slideLive={slideLive + 1}
            zIndex={i + 1}
            setSlideLive={setSlideLive}
            fluid={image.fluid}
        title={image.description}
            />
          )}
    </>
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
