import React from "react"

import { Section2 } from "../../../styled-components/GlobalStyles"

import ShopIntro from "./ShopIntro"
import Shop from "./Shop"

const ShopLanding = () => {
  return (
    <Section2>
      <ShopIntro />
      <Shop />
    </Section2>
  )
}

export default ShopLanding
