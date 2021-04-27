import * as React from "react"
import {
  GlobalStyle,
  PageBackground,
} from "../components/styled-components/GlobalStyles"
import Header from "./header"
import landing from '../images/logos/landing.png'
const Layout = ({ children }) => {
  const scroll = e => {
    console.log('boob')
  }
  console.log('boob')
  return (
    <div>
      <Header />
      <GlobalStyle />
      <PageBackground />
       
       
   
      <main onScroll={scroll}>{children}</main>
    </div>
  )
}

export default Layout
