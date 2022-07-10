import React, { useState, useRef, useLayoutEffect, useContext } from "react"
import styled from "styled-components"
import landingSqaure from "../../../../images/placeholders/homeSqaure.jpg"
import GlobalStateProvider from "../../../context/GlobalStateProvider"
import BackgroundLogo from "../../reusable/background-logo/BackgroundLogo"
const Hero = ({ imageHeight }) => {
  const [size, setSize] = useState([0, 0])
  let imgContainer = useRef(null)

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener("resize", updateSize)
      updateSize()
      return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size
  }

  useWindowSize()
  return (
    <GlobalStateProvider>
      <HeroContainer>
        <BackgroundLogo imageHeight={imageHeight} />
        <ImgSqaure
          height={imageHeight}
          ref={el => (imgContainer = el)}
          src={landingSqaure}
          alt="man in a butchers apron"
        />
      </HeroContainer>
    </GlobalStateProvider>
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
