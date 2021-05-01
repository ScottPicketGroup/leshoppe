import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {P} from '../../../styled-components/GlobalStyles'
const FooterLinks = () => {
    return (
        <FooterLinksContainer>
           <FooterLink to="/" style={{ marginBottom: `1.75rem` }}><P bc2>LE SHOPPE</P></FooterLink>
           <FooterLink to="/"><P bc2>Home</P></FooterLink>
           <FooterLink to="/contact"><P bc2>Contact</P></FooterLink>
           <FooterLink to="/terms-and-conditions"><P bc2>Terms and Conditions</P></FooterLink>
        </FooterLinksContainer>
    )
}

export default FooterLinks

export const FooterLinksContainer = styled.div`
width: 18.5rem;
height: 100%;

display: flex;
flex-direction: column;
`

export const FooterLink = styled(Link)`
padding: 1rem 1rem 1rem 0;
text-decoration: none;
transition: all .3s ease-in-out;
  :hover {
      opacity: 75%;
      transform: scale(1.01)
  }
  :first-child {
      padding: 0;
  }
`