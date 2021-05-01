import React from 'react'
import styled from 'styled-components'
import { P } from '../../../styled-components/GlobalStyles'
const ContactUsIntro = () => {
    return (
        <ContactUsIntroContainer>
        <h1>Contact Us</h1>
        <P bc2>
          Fill in your details here to send us a message and tick the box to be
          first to hear about all the exciting things we’ve got planned.{" "}
        </P>
    </ContactUsIntroContainer>
    )
}

export default ContactUsIntro

export const ContactUsIntroContainer = styled.div`
width: 32%;
h1 {
    margin-bottom: 2.25rem;
}
`