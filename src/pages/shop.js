import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ShopLanding from "../components/pages/shop/ShopLanding"
const Shop = (menuOpen, setMenuOpen) => (
  <>
    <Layout>
      <SEO title="Shop" />
      <ShopLanding />
      
    </Layout>
  </>
)

export default Shop

export const Section1 = styled.div`
  min-height: 100%;
  width: 99vw;
  position: absolute;
  z-index: 2;
  overflow-x: hidden;
  background: transperant;
  @media (max-width: 700px) {
    width: 100%;
  }
`
