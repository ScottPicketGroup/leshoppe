import React from 'react'
import styled from 'styled-components'
import Renderer from '../../reusable/rich-text-renderers/about'
const ContactUsIntro = ({ formSectionHeading, formSectionIntroduction }) => {
    return (
        <ContactUsIntroContainer>
        <h1>{formSectionHeading}</h1>
       <Renderer node={formSectionIntroduction}/>
    </ContactUsIntroContainer>
    )
}

export default ContactUsIntro

export const ContactUsIntroContainer = styled.div`
width: 25%;

h1 {
    margin-bottom: 2.25rem;
}

@media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 3.5rem !important;
  h1 {
    margin-bottom: 1.5rem !important;
  }
  }
`