import styled from 'styled-components'

import { color, font, padding } from "./variables"

export const HeaderContainer = styled.div`
display: flex;
position: fixed;
top: 0;
z-index: 3;
justify-content: space-between;
width: 100%;
padding: 2rem ${padding.page.horizontal};
border-bottom: 1px solid #153E35;
background: ${color.cream};
@media screen and (max-width: 600px) {
    padding: 1rem 2rem;

  }
`

export const LogoContainer = styled.div`
max-height: 1.5rem;
`

export const ComingSoonContainer = styled.div`
max-height: 1.5rem;
display: flex;
align-content: center;
span {
  padding-top: .15rem;
}
`

