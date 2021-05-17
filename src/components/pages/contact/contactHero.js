import React from 'react'
import styled from 'styled-components'
import landingSqaure from '../../../images/placeholders/kidSquare.jpg'

const ContactHero = () => {
    return (
        <HeroContainer>
            <ImgSqaure src={landingSqaure} alt='man in a butchers apron'/>
        </HeroContainer>
    )
}

export default ContactHero

export const HeroContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;

  
`
export const ImgSqaure = styled.img`
max-width: 33%;
margin-bottom: 6rem;

@media screen and (max-width: 450px) {
max-width: 50%;
margin-bottom: 2.25rem;
}
`

