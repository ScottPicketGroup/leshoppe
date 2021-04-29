import React from 'react'
import styled from 'styled-components'
import FooterContact from './FooterContact'
import FooterLinks from './FooterLinks'
import FooterSocials from './FooterSocials'
import FooterSubscribe from './FooterSubscribe'
const Footer = () => {
    return (
        <FooterContainer>
            <LeftContainer>
                <FooterLinks/>
                <FooterContact/>
                <FooterSocials/>
            </LeftContainer>
            <FooterSubscribe/>
        </FooterContainer>
    )
}

export default Footer

export const FooterContainer = styled.div`
width: 100vw;
height: 100%;
margin-left: -5.5rem;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 3.6rem 5.25rem 5.25rem 3.5rem;
`

export const LeftContainer = styled.div`
width: 56rem;
display: flex;
flex-wrap: wrap;
`