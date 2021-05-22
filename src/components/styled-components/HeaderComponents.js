import styled from 'styled-components'
import {Link} from 'gatsby'
import { color, font, padding } from "./variables"

export const HeaderContainer = styled.div`
display: flex;
position: fixed;
top: 0;
z-index: 300;
justify-content: space-between;
width: 100vw;
padding: 1.55rem 6rem 1.55rem 5.5rem;
border-bottom: 1px solid #153E35;
background: ${color.cream};
@media screen and (max-width: 600px) {
    padding: 1.2rem;
    height: 3.5rem;
  }
`

export const LogoContainer = styled(Link)`

svg {
  max-height: 1.25rem;
}
@media screen and (max-width: 500px) {
  img {max-height: .25rem;}
  }
`

export const ComingSoonContainer = styled.div`
max-height: 1.5rem;

display: flex;
align-items: center;
font-size: 1.5rem;
span {
  padding-top: .15rem;
}
@media screen and (max-width: 500px) {
 font-size: 99%;
  }
  @media screen and (max-width: 350px) {
 padding-left: .5rem;
 text-align: center;
  }
`

