import React, { useState, useEffect, useRef, useContext } from "react"
import {
  GlobalStyle,
  PageBackground,
} from "../components/styled-components/GlobalStyles"
import Header from "./header"
import styled from "styled-components"
import LogoFooter from "./pages/reusable/logo-footer/LogoFooter"
import Menu from "./pages/menu/menu"
import Footer from "./pages/reusable/footer/Footer"
import logo from "../images/logos/landing.png"
import GlobalStateProvider from "./context/GlobalStateProvider"
import Context from "../components/context/Context"
const Layout = ({ children }) => {
  const { globalState, globalDispatch } = useContext(Context)
  let footer = useRef(null)
  let page = useRef(null)

  const [pageHeight, setPageHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setPageHeight(page.clientHeight)
    setFooterHeight(footer.clientHeight)
  }, [])

  useEffect(() => {
    globalDispatch({
      type: "WINDOW",
      pageHeight: pageHeight,
      footerHeight: footerHeight,
      logoLimit: pageHeight - footerHeight - 250,
    })
  }, [pageHeight && footerHeight])

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  function logit() {
   console.log(window.pageYOffset)
  }


  return (
    
      <LayoutContainer>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <GlobalStyle />

        <Main ref={el => (page = el)} meh="123">
          {/* <PageBackground fade={scrollY} display={logoDisplay} /> */}
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
  overflow: hidden;
`

export const Main = styled.main`
  position: relative;
`

export const FooterContainer = styled.div``

export const LogoMobile = styled.img`
  display: none;
  width: 50%;
  margin: 112px 25% 0 25%;

  @media screen and (max-width: 450px) {
    display: flex;
  }
`
