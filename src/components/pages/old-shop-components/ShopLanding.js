import React from "react"

import { Section1 } from "../../styled-components/GlobalStyles"

import ShopInfo from '../../pages/shop/ShopInfo'
import Shop from "./Shop"
import ShopHero from './shopHero'

const ShopLanding = ({imageHeight}) => {
  return (

      <Section1>
        
        <ShopHero imageHeight={imageHeight}/>
        <ShopInfo/>
        <Shop/>
      </Section1>

  )
}

export default ShopLanding

