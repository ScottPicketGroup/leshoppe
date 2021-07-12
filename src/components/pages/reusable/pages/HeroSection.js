import React, {useEffect} from 'react'
import styled from 'styled-components'
import shopSquare from '../../../../images/placeholders/shopSqaure.jpg'
import BackgroundLogo from '../background-logo/BackgroundLogo'

const HeroSection = ({imageHeight}) => {
    
  
    return (
        <HeroContainer>
          <BackgroundLogo imageHeight={imageHeight}/>
        </HeroContainer>
    )
}

export default HeroSection

export const HeroContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;

  @media only screen and (max-width: 700px) {
  justify-content: center;
  margin-top: 30rem;
  display: none;
  }
`
export const ImgSqaure = styled.img`
max-width: 33%;
margin-bottom: 6rem;

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`

