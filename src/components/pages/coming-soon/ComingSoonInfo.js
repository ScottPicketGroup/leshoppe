import React from 'react'
import { P } from '../../styled-components/GlobalStyles'
import Subscribe from '../reusable/email-subscription/subscribe'
import styled from 'styled-components'
const ComingSoonInfo = () => {
    return (
        <>
            <h1>Coming Soon</h1>
            <PL bc2
            
            >Sign up for updates from the Scott Pickett Group and to be the first to know when Le Shoppe is live. </PL>
            <Subscribe/>
        </>
    )
}
export default ComingSoonInfo

export const PL = styled(P) `
margin-bottom: 3.36rem;
@media  screen and (max-width: 450px){
    margin-bottom: 2rem;
}
`