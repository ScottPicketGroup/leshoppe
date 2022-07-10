import React from "react"
import {Section1 } from "../../styled-components/GlobalStyles"

import ContactHero from "./contactHero"
import ContactInfo from "./contactInfo"
import ContactUs from "./ContactUs"
const ContactLanding = ({ data }) => {
  const {
    formSectionHeading,
    formSectionIntroduction,
    contactText,
    heroImage,
  } = data.allContentfulContactUsPageContent.edges[0].node
  return (
    <Section1>
      <ContactHero />
      <ContactInfo image={heroImage} contactText={contactText} />
      <ContactUs
        formSectionHeading={formSectionHeading}
        formSectionIntroduction={formSectionIntroduction}
      />
    </Section1>
  )
}

export default ContactLanding
