import React from "react"
import styled from "styled-components"
import { Page } from "../../styled-components/GlobalStyles"
import LogoFooter from "../reusable/logo-footer/LogoFooter"
import { color, font, padding } from "../../styled-components/variables"

import Footer from "../reusable/footer/Footer"
import ContactHero from "./contactHero"
import ContactInfo from "./contactInfo"
import ContactUs from "./ContactUs"
const ContactLanding = () => {
  return (
    <Page>
      <Section1>
        <ContactHero />
        <ContactInfo />
        <ContactUs/>
        <LogoFooter />
        <Footer />
      </Section1>
    </Page>
  )
}

export default ContactLanding

export const Section1 = styled.div`
  min-height: 100vh;
  width: 99vw;
  position: absolute;
  padding: ${padding.page.vertical} ${padding.page.horizontal};
  z-index: 1;
  overflow-x: hidden;
  background: transperant;
  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem;
  }
`
