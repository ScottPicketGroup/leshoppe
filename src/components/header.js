import * as React from "react"

import Logo from "./pages/coming-soon/Logo"

import {
  HeaderContainer,
  LogoContainer,
  ComingSoonContainer,
} from "../components/styled-components/HeaderComponents"
import { ComingSoonMenu, P } from "./styled-components/GlobalStyles"


const Header = ({ siteTitle, menuOpen, setMenuOpen }) => (

  <header>
    
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      
      <ComingSoonContainer>
      <ComingSoonMenu>COMING SOON</ComingSoonMenu>
        </ComingSoonContainer>
    </HeaderContainer>
  </header>
)

export default Header
