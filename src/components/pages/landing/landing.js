import React from "react"

import About from "./sections/about"
import Hero from "./sections/hero"
import Intro from "./sections/intro"
import MenuBoard from "./sections/menu-board/MenuBoard"
import OpeningInfo from "./sections/opening-info"
import Quote from "./sections/qoute"

import { Section1 } from "../../styled-components/GlobalStyles"
import LaNuit from "./laNuit"

const Landing = () => {
  return (
    <Section1>
      <Hero />
      <Intro />
      <About />
      <LaNuit />
      <Quote />
      <MenuBoard />
      <OpeningInfo />
    </Section1>
  )
}

export default Landing
