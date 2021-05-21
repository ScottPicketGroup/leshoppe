import React from 'react'
import styled from 'styled-components'
import {Footer, ChanceryLink, Socials} from '../../../styled-components/ComingSoonComponents'
import {P} from '../../../styled-components/GlobalStyles'
import Facebook from '../../coming-soon/Facebook'
import Instagram from '../../coming-soon/Instagram'
import Subscribe from '../email-subscription/subscribe'
const FooterSubscribe = () => {
    return (
        <FooterSubscribeContainer>
            <Heading>Subscribe:</Heading>

            <P bc3>Subscribe to the Scott Pickett Group newsletter to stay up to date with special events, new menus and new venues. </P>
            <Subscribe/>
            <FooterMobile>
             <ChanceryLink href="http://www.chancerylane.com.au" target="blank">Visit Chancery Lane</ChanceryLink>
             <Socials>
                 <Instagram/>
                 <Facebook/>
             </Socials>
         </FooterMobile>
        </FooterSubscribeContainer>
    )
}

export default FooterSubscribe

export const FooterSubscribeContainer = styled.div`
width: 25%;
@media screen and (max-width: 450px) {
    width: 85%;
    margin-bottom: 2.25rem;
}

`
export const Heading = styled.div`
margin-bottom: 1.75rem;

@media screen and (max-width: 450px) {
  margin-bottom: 1.5rem;
  font-size: .75rem;
}
`

export const Paragraph = styled.p`
margin-bottom: 1.75rem;

@media screen and (max-width: 450px) {
  margin-bottom: 1.5rem;
  font-size: .75rem!important;
}
`

export const FooterMobile = styled(Footer) `
display: none;
@media screen and (max-width: 451px) {
    display: flex
}
`