import React, { useState, useEffect } from "react"
import {
  GlobalStyle,
  PageBackground,
} from "../components/styled-components/GlobalStyles"
import Header from "./header"
import styled from 'styled-components'
import LogoFooter from "./pages/reusable/logo-footer/LogoFooter"
import Menu from "./pages/menu/menu"
const Layout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  function logit() {
    setScrollY(window.pageYOffset)
    console.log(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })
  
  return (
    <LayoutContainer>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <GlobalStyle />
      
      <Main >{children}</Main>
      
  
    </LayoutContainer>
  
  )
}

export default Layout

export const LayoutContainer = styled.div`
height: 100%;
display: flex;

`

export const Main = styled.main`
width: 10vw;
`