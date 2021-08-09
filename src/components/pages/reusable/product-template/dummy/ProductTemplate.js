import React from "react"
import { Section1 } from "../../../../styled-components/GlobalStyles"

import RecommendationsList from "./recommendations/RecommendationsListList"
import Layout from "../../../../layout"
import Product, { ProductContainer } from "./product/product"
const ProductTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <Section1>
       <ProductContainer/>
     
        <RecommendationsList product={pageContext.product} />
      </Section1>
    </Layout>
  )
}

export default ProductTemplate
