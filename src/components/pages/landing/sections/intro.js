import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import introImg from "../../../../images/placeholders/homeLandscapeMeat.jpg"
const Intro = () => {
  return (
    <IntroContainer>
      <ImgLandScape src={introImg} alt="meat hanging" />
      <IntroText>
        <P bc1>
          Scott Pickett and the team have re-imagined the former Bistro Vue site
          to become an instant classic, referencing traditional techniques with
          a modern edge that you can now take home with you.{" "}
        </P>
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
  }
`
