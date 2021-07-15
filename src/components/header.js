import React, { useState, useEffect, useContext } from "react"
import { globalHistory as history } from '@reach/router'
import Logo from "./pages/coming-soon/Logo"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../components/context/GlobalContextProvider"
import {
  HeaderContainer,
  LogoContainer,
  ComingSoonContainer,
} from "../components/styled-components/HeaderComponents"
import { P } from "./styled-components/GlobalStyles"
import CartIcon from "../images/logos/cart/CartIcon"


const Header = ({ siteTitle, menuOpen, setMenuOpen, props }) => {
  const state = useContext(GlobalStateContext)
  const openMenu = () => {setMenuOpen(true)}
 
  return (

  <header>
    
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      
      <ComingSoonContainer
      
      >
        
        {history.location.pathname.includes('/shop') ? (
  <CartIcon/>
): null}
        {!menuOpen ? (
          <P bc2 
          onClick={openMenu}
          >MENU</P>
        ): null}


        </ComingSoonContainer>
    </HeaderContainer>
  </header>
)}

export default Header
