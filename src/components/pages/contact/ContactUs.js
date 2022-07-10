import React from "react"
import styled from "styled-components"
import ContactUsForm from "./contact-us/ContactUsForm"
import ContactUsIntro from "./contact-us/ContactUsIntro"
const ContactUs = ({ formSectionIntroduction, formSectionHeading }) => {
  return (
    <ContactUsContainer
      data-sal="fade"
      data-sal-delay="100"
      data-sal-duration="500"
      data-sal-easing="ease"
    >
      <ContactUsIntro
        formSectionHeading={formSectionHeading}
        formSectionIntroduction={formSectionIntroduction}
      />
      <ContactUsForm />
    </ContactUsContainer>
  )
}

export default ContactUs

export const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.75rem;
  flex-wrap: wrap;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`
