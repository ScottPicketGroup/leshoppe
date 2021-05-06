import React, { useState } from "react"
import styled from "styled-components"
import Image from "./slider-components/Image"

import Video from "./slider-components/Video"
const MenuImageSlider = ({ assets, slideLive }) => {

  return (
    <MenuImageSliderContainer>
      {assets.map((image, i) => (
        <div class="">
          {image.file.contentType === "text/html" ? (
            <Video
              slideLive={slideLive + 1}
              videoSrc={image.file.fileName}
              videoTitle={image.description}
              zIndex={i + 1}
              transform={`translateX(${slideLive * 60}vw)`}
            />
          ) : (
            <Image 
            slideLive={slideLive + 1}
            zIndex={i + 1}
            transform={`translateX(${slideLive * 60}vw)`}
            fluid={image.fluid}
        title={image.description}
            />
          )}
        </div>
      ))}
    </MenuImageSliderContainer>
  )
}

export default MenuImageSlider

export const MenuImageSliderContainer = styled.div`
  width: 96vw;
  height: 42.12rem;
  padding: 0;
  display: flex;
`
