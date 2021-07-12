import React, { useState, useRef, useLayoutEffect, useContext } from "react"
import styled from "styled-components"
import landingSqaure from "../../../../images/placeholders/homeSqaure.jpg"
import BackgroundLogo from "../../reusable/background-logo/BackgroundLogo"

const Hero = ({ imageHeight }) => {

  return (
    <HeroContainer>
      <BackgroundLogo imageHeight={imageHeight} />
      <ImgSqaure
        height={imageHeight}
        src={landingSqaure}
        alt="man in a butchers apron"
      />
    </HeroContainer>
  )
}

export default Hero

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3.5rem;
`
export const ImgSqaure = styled.img`
  width: 33%;
  height: 33%;
  visibility: hidden;
  align-self: flex-end;
  @media only screen and (max-width: 450px) {
    width: 50%;
    height: 100%;
    display: none;
  }
`
