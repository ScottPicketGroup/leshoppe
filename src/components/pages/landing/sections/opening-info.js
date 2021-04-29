import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import oldGuy from "../../../../images/placeholders/openingGuy.jpg"
import outside from "../../../../images/placeholders/OpeningOutside.jpg"

const OpeningInfo = () => {
  return (
    <OpeningInfoContainer>
        <ImgBox>
        <ImgPortraitSmall src={oldGuy} />
      <ImgLandscapeSmall src={outside} />
        </ImgBox>
    hi hi
      <OpeningInfoText>
        <h1 style={{ marginBottom: `2.25rem` }}>Location and Opening Times</h1>
        <P padding="2rem" bc2>
          Le Shoppe
          <br />
          513 Elizabeth Street <br />
          Melbourne 3000
        </P>
        <h2 style={{ marginTop: `2.25rem` }}>
          {" "}
          <a
            href="https://www.google.com/maps/@-37.8068975,144.9567553,17z"
            target="_blank"
          >
            VIEW IN GOOGLE MAPS
          </a>{" "}
        </h2>
        <P padding="2rem" bc2></P>
        <OpeningHoursContainer>
          <Days>
            <ul>
              <li>
                <P bc2>Monday</P>
              </li>
              <li>
                <P bc2>Tuesday</P>
              </li>
              <li>
                <P bc2>Wednesday</P>
              </li>
              <li>
                <P bc2>Thursday</P>
              </li>
              <li>
                <P bc2>Friday</P>
              </li>
              <li>
                <P bc2>Saturday</P>
              </li>
              <li>
                <P bc2>Sunday</P>
              </li>
            </ul>
          </Days>
          <Hours>
            <ul>
              <li>
                <P bc2>11:30am–9pm</P>
              </li>
              <li>
                <P bc2>11:30am–9pm</P>
              </li>
              <li>
                <P bc2>11:30am–9pm</P>
              </li>
              <li>
                <P bc2>11:30am–9pm</P>
              </li>
              <li>
                <P bc2>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc2>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc2>11:30am–9pm</P>
              </li>
            </ul>
          </Hours>
        </OpeningHoursContainer>
      </OpeningInfoText>
    </OpeningInfoContainer>
  )
}

export default OpeningInfo

export const OpeningInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin-bottom: 13.5rem;
  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`
export const OpeningInfoText = styled.div`
  width: 32rem;
`

export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;

  ul {
    list-style-type: none;
  }
`
export const Days = styled.div`
  width: 25%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
`

export const ImgPortraitSmall = styled.img`
  
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
export const ImgBox = styled.div`
width: 58%;

display: flex;
justify-content: space-between;
flex-flow: wrap;
`
export const ImgLandscapeSmall = styled.img`
max-width: 56%;
max-height: 65%;
  background: green;

  @media only screen and (max-width: 1440px) and (min-width: 800px) {
    width: 28rem;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
 
  }
`
