import React, { useState, useEffect, useRef } from "react"
import {
  GlobalStyle,
  PageBackground,
} from "../components/styled-components/GlobalStyles"
import Header from "./header"
import styled from "styled-components"
import LogoFooter from "./pages/reusable/logo-footer/LogoFooter"
import Menu from "./pages/menu/menu"
import Footer from "./pages/reusable/footer/Footer"
import logo from '../images/logos/landing.png'
const Layout = ({ children }) => {
  let footer = useRef(null)
  let page = useRef(null)
  const [logoLimit, setLogoLimit] = useState(0)
  const [logoDisplay, setLogoDisplay] = useState(true)
  const [scrollY, setScrollY] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  function logit() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    if (scrollY > logoLimit) {
      setLogoDisplay(false)
    } else {
      setLogoDisplay(true)
    }
    setLogoLimit(page.clientHeight - 1000 - footer.clientHeight)
  })

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  console.log(scrollY, logoLimit, logoDisplay)
  return (
    <LayoutContainer>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <GlobalStyle />
      
      <Main ref={el => (page = el)}>
    
      <PageBackground fade={scrollY} display={logoDisplay} />
      <LogoMobile src={logo} alt="mobile logo" />
        {children}
        <FooterContainer ref={el => (footer = el)}>
          <LogoFooter />
          <Footer />
        </FooterContainer>
      </Main>
    </LayoutContainer>
  )
}

export default Layout

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
`

export const Main = styled.main`
  position: relative;
`

export const FooterContainer = styled.div ``


export const LogoMobile = styled.img `
display: none;
width: 50%;
margin: 112px 25% 0 25%;

@media screen and (max-width: 450px) {
display: flex;
}
`