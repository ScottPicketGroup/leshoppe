import React, {useState, useEffect} from "react"
import {
  GlobalStyle,
  PageBackground,
} from "../components/styled-components/GlobalStyles"
import Header from "./header"
import landing from '../images/logos/landing.png'
const Layout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return (
    <div>
      <Header />
      <GlobalStyle />
      <PageBackground />
      <div className="fixed-center">Scroll position: {scrollY}px</div>
       
   
      <main >{children}</main>
    </div>
  )
}

export default Layout