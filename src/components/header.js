import * as React from "react"

import Logo from "./pages/coming-soon/Logo"

import {
  HeaderContainer,
  LogoContainer,
  ComingSoonContainer,
} from "../components/styled-components/HeaderComponents"
import { MenuButton } from "./styled-components/GlobalStyles"


const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      
      <ComingSoonContainer><span>COMING SOON</span></ComingSoonContainer>
    </HeaderContainer>
  </header>
)

export default Header
