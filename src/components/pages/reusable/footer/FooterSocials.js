import React from 'react'
import styled from 'styled-components'

import {P, UnderlineLink} from '../../../styled-components/GlobalStyles'
const FooterSocials = () => {
    return (
        <FooterSocialsContainer>
            <P style={{ marginBottom: `1.75rem` }} bc2>SOCIAL MEDIA</P>
            
            <UnderlineLink style={{ marginBottom: `1.75rem` }} href="http://www.instagram.com/leshoppe" target="blank">Instagram</UnderlineLink>
            <UnderlineLink style={{ marginBottom: `3.5rem` }} href="http://www.facebook.com/leshoppe" target="blank">Facebook</UnderlineLink>
            <UnderlineLink  href="http://www.chancerylane.com.au" target="blank">Visit Chancery Lane</UnderlineLink>
        </FooterSocialsContainer>
    )
}

export default FooterSocials

export const FooterSocialsContainer = styled.div`
width: 18.5rem;
height: 100%;
overflow-x: hidden;
display: flex;
flex-direction: column;
`


