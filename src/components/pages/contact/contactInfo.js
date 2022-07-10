import React from "react"
import styled from "styled-components"
import { P } from "../../styled-components/GlobalStyles"
import ContactIntroLandscape from "../landing/sections/images/contactInfoLandscape"
import Renderer from "../reusable/rich-text-renderers/sample"
const ContactInfo = ({ image, contactText }) => {
  return (
    <ContactInfoContainer>
      <ContactImage
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <ContactIntroLandscape image={image} />
      </ContactImage>
      <ContactText
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Renderer node={contactText} />
      </ContactText>
    </ContactInfoContainer>
  )
}

export default ContactInfo

export const ContactInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
  }
`

export const ContactImage = styled.div`
  width: 58%;
  @media screen and (max-width: 450px) {
    width: 100%;
    order: 2;
  }

  img {
    width: 100%;
  }
`

export const ContactText = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-flow: column;
  @media screen and (max-width: 450px) {
    width: 100%;
    order: 1;
    margin-bottom: 3.5rem;
  }
`
export const PC = styled(P)`
  margin-bottom: 2rem;
`
export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;

  ul {
    list-style-type: none;
  }
  li {
    padding-bottom: 0.25rem;
  }
`
export const Days = styled.div`
  width: 43%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
`
