import React from "react"
import styled from "styled-components"
import { Page, Section1 } from "../../styled-components/GlobalStyles"
import LogoFooter from "../reusable/logo-footer/LogoFooter"
import { color, font, padding } from "../../styled-components/variables"

import Footer from "../reusable/footer/Footer"
import ContactHero from "./contactHero"
import ContactInfo from "./contactInfo"
import ContactUs from "./ContactUs"
const ContactLanding = () => {
  return (
    <Section1>
      <ContactHero />
      <ContactInfo />
      <ContactUs />
    </Section1>
  )
}

export default ContactLanding
