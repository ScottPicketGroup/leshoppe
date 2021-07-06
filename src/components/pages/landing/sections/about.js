import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import landscape from "../../../../images/placeholders/aboutLandscape.jpg"
import vertical from "../../../../images/placeholders/aboutPortrait.jpg"
import AboutLandscape from "./images/aboutLandscape"

const About = () => {
  return (
    <AboutContainer

    >
      <AboutText  data-sal="fade"
  data-sal-delay="100"
  data-sal-duration="500"
  data-sal-easing="ease">
        <Heading>
          About Le Shoppe
          
        </Heading>
        <Paragraph bc2>
          Visit us weekdays for freshly made baguettes, salads, pastries and
          grab-and-go food for the workday, and of course your morning coffee.
        </Paragraph>

        <Paragraph bc2>
        We also have a selection of pre-packaged pantry treats—both local and specialty imported items, local spirits, international beers and wines and interesting aperitivi for an afternoon pick-me-up. 
          {/* <ol>
            <li>Like its name, the fit-out pays homage </li>
            <li>Previous era; a space where opulence and luxury </li>
            <li>Served as a refuge from life outside</li>
          </ol> */}
        </Paragraph>
       
        <Paragraph bc2>
        We are pleased to offer a range of corporate catering options including lunch boxes, shared platters and bespoke breakfast & lunch catering, for enquiries, email info@leshoppe.com.au – our full catering offer and online ordering will be launching soon. Watch this space!
          {/* <ul>
            <li>Like its name, the fit-out pays homage</li>
            <li>Previous era; a space where opulence and luxury</li>
            <li>refuge from life outside</li>
          </ul> */}
        </Paragraph>
      </AboutText>
      <ImgContainer>
      <AboutLandscape/>
        <ImgPortraitSmall src={vertical}  data-sal="fade"
  data-sal-delay="100"
  data-sal-duration="500"
  data-sal-easing="ease"/>
     
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
  @media  (max-width: 450px) {
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
