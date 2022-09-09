import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import MenuImageSlider from "./slider/MenuImageSlider"
import { P } from "../../../../styled-components/GlobalStyles"
import SliderControls from "./slider/slider-components/SliderControls"
import Title from "./slider/slider-components/Title"

import NewCarousel from "./slider/NewCarousel"
const Carousel = ({ galleryImages  }) => {
  return (
    <MenuBoardPageContainer
      data-sal="fade"
      data-sal-delay="100"
      data-sal-duration="500"
      data-sal-easing="ease"
    >
      <NewCarousel galleryImages={galleryImages} />
    </MenuBoardPageContainer>
  )
}

export default Carousel

export const MenuBoardPageContainer = styled.div`
  h1 {
    margin-bottom: 2.25rem;
  }
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 11rem;
  }
`
