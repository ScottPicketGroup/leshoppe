import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import oldGuy from "../../../../images/placeholders/openingGuy.jpg"
import outside from "../../../../images/placeholders/OpeningOutside.jpg"

const OpeningInfo = () => {
  return (
    <OpeningInfoContainer>
        <ImgContainer>
        <ImgPortraitSmall src={oldGuy} />
      <ImgLandscapeSmall src={outside} />
      </ImgContainer>
  
      <OpeningInfoText>
        <Heading>Location and Opening Times</Heading>
        <P bc2>
          Le Shoppe
          <br />
          513 Elizabeth Street <br />
          Melbourne 3000
        </P>
        <GoogleLink>
          <a
            href="https://www.google.com/maps/@-37.8068975,144.9567553,17z"
            target="_blank"
          >
            VIEW IN GOOGLE MAPS
          </a>
        </GoogleLink>
      
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
    margin-bottom: 6rem;
  }
`
export const OpeningInfoText = styled.div`
  width: 33.3%;
  @media screen and (max-width: 700px) {
    width: 100%;
    order: 1;
    margin-bottom: 3.5rem;
  }
`

export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;

  ul {
    list-style-type: none;
  }
`
export const Heading = styled.h1`
margin-bottom: 2.25rem;
@media screen and (max-width: 700px) {
    
    margin-bottom: 1.5rem;
  }
`

export const GoogleLink = styled.h2`
margin: 2.25rem 0;

@media screen and (max-width: 700px) {
    
    margin: 1.5rem 0;
  }
`

export const Days = styled.div`
  width: 25%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
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
