import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {P} from '../../../styled-components/GlobalStyles'
const FooterLinks = () => {
    return (
        <FooterLinksContainer>
           <FooterLink to="/">LE SHOPPE</FooterLink>
           <FooterLink to="/">Home</FooterLink>
           <FooterLink to="/contact">Contact</FooterLink>
           <FooterLink to="/terms-and-conditions">Terms and Conditions</FooterLink>
        </FooterLinksContainer>
    )
}

export default FooterLinks

export const FooterLinksContainer = styled.div`
width: 33.3%;


display: flex;
flex-direction: column;
@media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 3rem;
   
}
`

export const FooterLink = styled(Link)`
margin-bottom: 1.75rem;
text-decoration: none;
transition: all .3s ease-in-out;
font-size: 1rem;
@media screen and (max-width: 450px) {
    margin-bottom: 1rem;
    font-size: .75rem;
}
  :hover {
      opacity: 75%;
    
  }
  :first-child {
      margin-bottom: 1.75rem;
      @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
}
:last-child {
    margin-bottom: 0;
}
  }
`