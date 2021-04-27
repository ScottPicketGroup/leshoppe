import React from 'react'
import styled from 'styled-components'
import landingSqaure from '../../../../images/placeholders/homeSqaure.jpg'

const Hero = () => {
    return (
        <HeroContainer>
            <ImgSqaure src={landingSqaure} alt='man in a butchers apron'/>
        </HeroContainer>
    )
}

export default Hero

export const HeroContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`
export const ImgSqaure = styled.img`
max-width: 32rem;
margin-bottom: 7rem;
`

