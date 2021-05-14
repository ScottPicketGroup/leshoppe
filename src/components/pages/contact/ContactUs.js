import React from "react"
import styled from "styled-components"
import { P } from "../../styled-components/GlobalStyles"
import ContactUsForm from "./contact-us/ContactUsForm"
import ContactUsIntro from "./contact-us/ContactUsIntro"
const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactUsIntro/>
      <ContactUsForm/>
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