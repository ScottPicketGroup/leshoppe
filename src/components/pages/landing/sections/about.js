import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import meat from "../../../../images/placeholders/homeLandscapeCupboardMeat.jpg"
import salami from "../../../../images/placeholders/homeLandscapeSalami.jpg"

const About = () => {
  return (
    <AboutContainer>
      <AboutText>
        <h1 style={{ marginBottom: `2.25rem` }}>
          About Le Shoppe
          <br />
          Second line example
        </h1>
        <P bc2>
          The acquisition of our newest site in Little Collins Street sees our
          first footprint into the top end of Melbourne’s CBD.{" "}
          <i> Housed in the historic Normanby Chambers building,</i> Scott
          Pickett and the team have re-imagined the former Bistro Vue site to
          become an instant classic. Returning to its most successful
          incarnation, Chancery Lane will return the space to a
          European-inspired bistro – albeit with an edge.
        </P>

        <P padding="2rem" bc2>
          1. Like its name, the fit-out pays homage <br />
          2. Previous era; a space where opulence and luxury <br />
          3. Served as a refuge from life outside
        </P>
        <P padding="2rem" bc2>
          - Like its name, the fit-out pays homage <br />
          - Previous era; a space where opulence and luxury <br />- Served as a
          refuge from life outside
        </P>
      </AboutText>

      <ImgPortraitSmall src={meat} />
      <ImgLandscapeSmall src={salami} />
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
`
export const AboutText = styled.div`
  width: 32rem;
`

export const ImgPortraitSmall = styled.img`
  width: 25.2rem;
  margin-right: 1rem;
  background: blue;
  @media only screen and (max-width: 1440px) and (min-width: 800px) {
    width: 20rem;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 1rem 0;
  }
`

export const ImgLandscapeSmall = styled.img`
  width: 35.5rem;
  height: 23.7rem;
  background: green;
  
  @media only screen and (max-width: 1440px) and (min-width: 800px) {
    width: 28rem;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`
