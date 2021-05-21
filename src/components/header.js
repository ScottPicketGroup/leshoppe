import * as React from "react"

import Logo from "./pages/coming-soon/Logo"

import {
  HeaderContainer,
  LogoContainer,
  ComingSoonContainer,
} from "../components/styled-components/HeaderComponents"
import { P } from "./styled-components/GlobalStyles"


const Header = ({ siteTitle, menuOpen, setMenuOpen }) => {
  const openMenu = () => {setMenuOpen(true)}
  return (

  <header>
    
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      
      <ComingSoonContainer
      
      >
        

        {!menuOpen ? (
          <P menu
          onClick={openMenu}
          >MENU</P>
        ): null}
        </ComingSoonContainer>
    </HeaderContainer>
  </header>
)}

export default Header
