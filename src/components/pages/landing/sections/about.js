import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import meat from "../../../../images/placeholders/homeLandscapeCupboardMeat.jpg"
import salami from "../../../../images/placeholders/homeLandscapeSalami.jpg"

const About = () => {
  return (
    <AboutContainer>
      <AboutText>
        <Heading>
          About Le Shoppe
          <br />
          Second line example
        </Heading>
        <Paragraph bc2>
          The acquisition of our newest site in Little Collins Street sees our
          first footprint into the top end of Melbourne’s CBD.{" "}
          <i> Housed in the historic Normanby Chambers building,</i> Scott
          Pickett and the team have re-imagined the former Bistro Vue site to
          become an instant classic. Returning to its most successful
          incarnation, Chancery Lane will return the space to a
          European-inspired bistro – albeit with an edge.
        </Paragraph>

        <Paragraph  bc2>
          1. Like its name, the fit-out pays homage <br />
          2. Previous era; a space where opulence and luxury <br />
          3. Served as a refuge from life outside
        </Paragraph>
        <Paragraph  bc2>
          - Like its name, the fit-out pays homage <br />
          - Previous era; a space where opulence and luxury <br />- Served as a
          refuge from life outside
        </Paragraph>
      </AboutText>
      <ImgContainer>
        <ImgPortraitSmall src={meat} />
        <ImgLandscapeSmall src={salami} />
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
margin-top: 2.25rem;
@media screen and (max-width: 450px) {
  margin-bottom: 1.5rem;
}
`
export const Paragraph = styled(P) `
margin-bottom: 2.5rem;
@media screen and (max-width: 450px) {
  margin-bottom: 1.5rem;
}
`
export const ImgContainer = styled.div`
  width: 58%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    width: 100%;
    order: 2;
  }
`
export const ImgPortraitSmall = styled.img`
  width: 40%;
  @media screen and (max-width: 450px) {
    width: 75%;
    margin-bottom: 3.5rem;
  }
`

export const ImgLandscapeSmall = styled.img`
  width: 57%;
  @media screen and (max-width: 450px) {
  width: 75%;
  align-self: flex-end;
  }
`

