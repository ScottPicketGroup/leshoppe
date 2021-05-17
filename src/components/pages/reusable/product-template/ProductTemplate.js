import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import {
  GlobalStyle,
  Page,
  Section1,
} from "../../../styled-components/GlobalStyles"
import Footer from "../footer/Footer"
import LogoFooter from "../logo-footer/LogoFooter"
import OrderInfo from "./order-section/OrderInfo"
import ProductContainer from "./order-section/ProductContainer"
import RecommendationList from "./recommendations-section/product-list/ProductList"
import Layout from "../../../layout"
const ProductTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <Page>
        <Section1>
          <ProductContainer />
          <RecommendationList />
          <LogoFooter />
          <Footer />
        </Section1>
      </Page>
    </Layout>
  )
}

export default ProductTemplate

// export const query = graphql`

// `
