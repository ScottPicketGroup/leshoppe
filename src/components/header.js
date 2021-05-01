import * as React from "react"

import Logo from "./pages/coming-soon/Logo"

import {
  HeaderContainer,
  LogoContainer,
  ComingSoonContainer,
} from "../components/styled-components/HeaderComponents"
import { P } from "./styled-components/GlobalStyles"


const Header = ({ siteTitle, menuOpen, setMenuOpen }) => (

  <header>
    
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      
      <ComingSoonContainer onClick={() => setMenuOpen(true)}>
        {!menuOpen ? (
          <P bc1>Menu</P>
        ): null}
        </ComingSoonContainer>
    </HeaderContainer>
  </header>
)

export default Header
