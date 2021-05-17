import React from "react"

import { Page, Section1 } from "../../styled-components/GlobalStyles"

import HeroSection from "../reusable/pages/HeroSection"
import ShopInfo from '../../pages/shop/ShopInfo'
import Shop from "./Shop"
const ShopLanding = () => {
  return (

      <Section1>
        <HeroSection/>
        <ShopInfo/>
        <Shop/>
      </Section1>

  )
}

export default ShopLanding

