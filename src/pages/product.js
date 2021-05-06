import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import ProductTemplate from "../components/pages/reusable/product-template/ProductTemplate"
const ProductPage = () => (
  <>
  
    <Layout>
      <SEO title="Welcome" />
      <AA>

          <ProductTemplate/>
      </AA>
      
    </Layout>
  </>
)

export default ProductPage

export const AA = styled.div`
  z-index: 500;
  width: 99vw;
  height: 100vh;

  margin-top: 5.6rem;
`