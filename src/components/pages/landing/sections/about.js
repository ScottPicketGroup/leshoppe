import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import AboutLandscape from "./images/aboutLandscape"
import AboutPortrait from "./images/aboutPortrait"
import Renderer from "../../reusable/rich-text-renderers/about"

const About = ({ aboutText, aboutHorizontalImage, aboutVerticalImage }) => {
  return (
    <AboutContainer>
      <AboutText
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Renderer bc="bc2" node={aboutText} />
      </AboutText>
      <ImgContainer>
        <AboutLandscape marginBottom="3.5rem" aboutHorizontalImage={aboutHorizontalImage} />
        <AboutPortrait aboutVerticalImage={aboutVerticalImage}/>
      </ImgContainer>
    </AboutContainer>
  )
}

export default About

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin-bottom: 13.5rem;
  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: 6rem;
  }
`
export const AboutText = styled.div`
  width: 33%;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 3.5rem;
  }
`
export const Heading = styled.h1`
  margin-bottom: 2.25rem;

  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
  }
`
export const Paragraph = styled(P)`
  margin-bottom: 2.5rem;
  @media (max-width: 450px) {
    margin-bottom: 1.5rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`
export const ImgContainer = styled.div`
  width: 58%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
    width: 100%;
    order: 2;
  }
`
export const ImgPortraitSmall = styled.img`
  width: 40%;
  @media (max-width: 450px) {
    width: 75%;
    margin-bottom: 3.5rem;
  }
`

export const ImgLandscapeSmall = styled.img`
  width: 57%;
  @media (max-width: 450px) {
    width: 75%;
    align-self: flex-end;
  }
`
