import React from "react"
import styled from "styled-components"
import { GoogleMapsLink, P, Pintro } from "../../../styled-components/GlobalStyles"
import Renderer from "../../reusable/rich-text-renderers/OpeningInfo"
import OpeningLandscape from "./images/openingLandscape"
import OpeningPortrait from "./images/openingPortrait"

const OpeningInfo = ({
  venueInfoVerticalImage,
  venueInfoHorizontalImage,
  venueInfoHeading,
  venueInfoGoogleLInk,
  venueInfoDescription,
  venueInfoOpeningTimes,
}) => {
  return (
    <OpeningInfoContainer>
      <ImgContainer
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <OpeningPortrait venueInfoVerticalImage={venueInfoVerticalImage} />
        <OpeningLandscape venueInfoHorizontalImage={venueInfoHorizontalImage} />
      </ImgContainer>

      <OpeningInfoText
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      ><Heading>{venueInfoHeading}</Heading>
      
        <Renderer node={venueInfoDescription} />
     
          <GoogleMapsLink href={venueInfoGoogleLInk}>VIEW IN GOOGLE MAPS</GoogleMapsLink>
       
        <Renderer node={venueInfoOpeningTimes} />
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
  font-size: 2rem;
  margin-bottom: 2.25rem;
  @media screen and (max-width: 700px) {
    margin-bottom: 1.5rem;
  }
`

export const GoogleLink = styled.h2`
  margin: 2.25rem 0;
  text-decoration: none;
  a {
    font-size: 1rem !important;
  }
  @media screen and (max-width: 700px) {
    font-size: 1rem;
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
