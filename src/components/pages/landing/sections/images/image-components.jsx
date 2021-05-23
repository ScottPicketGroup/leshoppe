import styled from 'styled-components'
import Img from 'gatsby-image'

export const ImgPortrait = styled(Img)`
  width: 40%;
  @media screen and (max-width: 450px) {
  
    margin-bottom: 3.5rem;
  }
`
export const ImgLandscape = styled(Img)`
width: ${props => props.full ? `100%` : ``};
  @media screen and (max-width: 450px) {
    width: 75%;
    align-self: flex-end;
  }
`