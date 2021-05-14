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
margin-bottom: 3.5rem;
  @media only screen and (max-width: 700px) {
  margin-bottom: 3.5rem;
  margin-top: 30rem;
  
  }
`
export const ImgSqaure = styled.img`
width: 33%;

@media only screen and (max-width: 1440px) and (min-width: 800px) {
    width: 28rem;
  }
  @media only screen and (max-width: 700px) {
    width: 50%;
    height: 100%;
  }
`

