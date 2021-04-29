import React from 'react'
import styled from 'styled-components'
import {P} from '../../../styled-components/GlobalStyles'
import Subscribe from '../email-subscription/subscribe'
const FooterSubscribe = () => {
    return (
        <FooterSubscribeContainer>
            <P style={{ marginBottom: `1.75rem` }} bc2>SUBSCRIBE TO OUR MAILING LIST</P>

            <P bc3>Sign up to our newletter for news, stories and invitations to the things we love to share and enjoy from Scott Pickett Group.</P>
            <Subscribe/>
        </FooterSubscribeContainer>
    )
}

export default FooterSubscribe

export const FooterSubscribeContainer = styled.div`
width: 26.5rem;


`