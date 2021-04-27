import React from 'react'
import styled from 'styled-components'
import {P} from '../../../styled-components/GlobalStyles'
import introImg from '../../../../images/placeholders/homeLandscapeMeat.jpg'
const Intro = () => {
    return (
        <IntroContainer>
            <ImgLandScape src={introImg} alt="meat hanging" />
            <IntroText>
            <P bc1>Scott Pickett and the team have re-imagined the former Bistro Vue site to become an instant classic, referencing traditional techniques with a modern edge that you can now take home with you. </P>
            </IntroText>
        </IntroContainer>
    )
}

export default Intro

export const IntroContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-flow: wrap;
`

export const ImgLandScape = styled.img`
width: 50.25rem;
margin-bottom: 13.5rem;
`
export const IntroText = styled.div`
width: 32rem;
`