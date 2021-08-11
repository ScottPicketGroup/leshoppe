import React, {useState, useEffect, useRef} from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from "../components/seo"
import Landing from "../components/pages/landing/landing"
import GlobalStateProvider from "../components/context/GlobalStateProvider"

import SliderTest from '../components/pages/reusable/sliderTest'
import Carousel from "../components/pages/landing/sections/menu-board/slider/Carousel"

const SecondPage = (menuOpen,setMenuOpen) => {


  

return (

  

  <Layout>
    <SEO title="Home" />

<Carousel />
  </Layout>


)}

export default SecondPage


