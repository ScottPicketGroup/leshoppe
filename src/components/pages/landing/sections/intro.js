import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import introImg from "../../../../images/placeholders/introLandscape.jpg"
import IntroLandscape from "./images/introLandscape"
import VideoPlayer, { ImgLandscape } from "./video/videoPlayer"
import Renderer from "../../reusable/rich-text-renderers/sample"
const Intro = ({welcomeText, introVideo}) => {
  console.log('introVideo', introVideo)
  return (
    <IntroContainer>
      <>
        <VideoPlayer introVideo={introVideo}/>
        <IntroLandscape
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
          data-sal-easing="ease"
        />
      </>

      <IntroText
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Renderer node={welcomeText} />
      </IntroText>
    </IntroContainer>
  )
}

export default Intro

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin-bottom: 13.5rem;
  @media (max-width: 450px) {
    margin-bottom: 6rem;
  }
`

export const ImgLandScape = styled.img`
  width: 58%;

  height: 100%;
  @media (max-width: 450px) {
    width: 75%;
    display: flex;
    order: 1;
  }
`
export const IntroText = styled.div`
  width: 33%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 3.5rem;
    margin-top: 3.5rem;
  }
`
export const Pintro = styled(P)`
  margin-bottom: 36px;
  @media screen and (max-width: 450px) {
    margin-bottom: 24px;
  }
`
