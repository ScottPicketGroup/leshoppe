import React from 'react'
import { P } from '../../styled-components/GlobalStyles'
import Subscribe from '../reusable/email-subscription/subscribe'
const ComingSoonInfo = () => {
    return (
        <>
            <h1>Coming Soon</h1>
            <P bc2
            style={{marginBottom: `2.25rem`}}
            >Sign up to our newletter for news, stories and invitations to the things we love to share and enjoy from Scott Pickett Group.</P>
            <Subscribe/>
        </>
    )
}
export default ComingSoonInfo