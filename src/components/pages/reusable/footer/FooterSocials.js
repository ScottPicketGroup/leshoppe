import React from 'react'
import styled from 'styled-components'

import {P, UnderlineLink} from '../../../styled-components/GlobalStyles'
const FooterSocials = () => {
    return (
        <FooterSocialsContainer>
            <Heading>SOCIAL MEDIA</Heading>
            <SocialsLinks>
            <FooterLink href="https://www.instagram.com/leshoppe.chancerylane" target="blank">Instagram</FooterLink>
            <FooterLink  href="https://www.facebook.com/leshoppe.chancerylane" target="blank">Facebook</FooterLink>
            <FooterLink  href="http://www.chancerylane.com.au" target="blank">VISIT CHANCERY LANE</FooterLink>
            </SocialsLinks>
        </FooterSocialsContainer>
    )
}

export default FooterSocials

export const FooterSocialsContainer = styled.div`

width: 33%;

display: flex;
flex-direction: column;

@media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 2.25rem;
    font-size: .75rem;
}
`


export const Heading = styled.div`
margin-bottom: 1.75rem;

@media screen and (max-width: 450px) {
  margin-bottom: 1.5rem;
  font-size: .75rem;
}
`

    export const SocialsLinks = styled.div`
    display: flex;
    flex-direction: column;
   
 
    `

export const FooterLink = styled.a`
margin-bottom: 1.75rem;
text-decoration: none;
transition: all .3s ease-in-out;
font-size: 1rem !important;
@media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
    font-size: .75rem !important;
}

  :hover {
      opacity: 75%;
    
  }
  :nth-child(2) {
      margin-bottom: 2.25rem;
      @media screen and (max-width: 450px) {
   
}
:last-child {
    margin-bottom: 0;
}
  }
`