import React from "react"
import { Section1 } from "../../../../styled-components/GlobalStyles"

import RecommendationsList from "./recommendations/RecommendationsListList"
import Layout from "../../../../layout"
import Product from "./product/product"
const ProductTemplate = ({ pageContext }) => {


  

  return (
    <Layout>
      <Section1>
   <Product product={pageContext}/>
   <RecommendationsList product={pageContext.product} />
         </Section1>
    </Layout>
  )
}

export default ProductTemplate
