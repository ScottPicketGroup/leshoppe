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

  @media only screen and (max-width: 700px) {
  justify-content: center;
  margin-top: 30rem;
  }
`
export const ImgSqaure = styled.img`
max-width: 32rem;
margin-bottom: 7rem;
@media only screen and (max-width: 1440px) and (min-width: 800px) {
    width: 28rem;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`

