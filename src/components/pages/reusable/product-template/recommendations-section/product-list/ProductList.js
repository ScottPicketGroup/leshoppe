import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ProductCard from "./ProductCard"
const RecommendationList = () => {
 
  return (
 <RecommendationListContainer>
    <h1>Related recommendations</h1>
      <RecommendationGrid >
        
        {/* {data.allShopifyProduct.edges.map(product => ( */}
          <ProductCard />
          <ProductCard />
          <ProductCard />

         
        
      </RecommendationGrid>
</RecommendationListContainer>
  )
}

export default RecommendationList

export const RecommendationListContainer = styled.div`
margin: 13.5rem 0;
h1 {
  margin-bottom: 2.25rem;
}
`

export const RecommendationGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`
