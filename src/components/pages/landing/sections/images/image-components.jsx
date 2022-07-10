import styled from 'styled-components'
import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'
export const ImgPortrait = styled(GatsbyImage)`
  width: 40%;
  @media screen and (max-width: 450px) {
  
    margin-bottom: 3.5rem;
  }
`
export const ImgLandscape = styled(GatsbyImage)`

 width: ${ props => props.full ? `100%` : `57%`};
  @media screen and (max-width: 450px) {
    width: 75%;
    align-self: flex-end;
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  }
`
