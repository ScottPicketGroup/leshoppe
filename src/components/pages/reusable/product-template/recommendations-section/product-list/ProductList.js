import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ProductCard from "./ProductCard"
import { useEffect } from "react"
const RecommendationList = ({product}) => {
 const [recommendations, setRecommendations] = React.useState([])
  const data = useStaticQuery(graphql`
  query AllProducts {
    allShopifyProduct {
      edges {
        node {
          handle
          description
          availableForSale
          tags
          productType
          title
          variants {
            priceV2 {
              amount
              currencyCode
            }
            title
          }
          images {
            localFile {
              id
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  }
  
 `)

useEffect(() => {
  const recommendationsList = []
  data.allShopifyProduct.edges.map((recommendation, i )=> {
   
    if (recommendation.node.tags[0] === product.product.tags[0]) recommendationsList.push(recommendation)
    
    setRecommendations(recommendationsList.slice(0,3))
  })
}, [product, data])

console.log(recommendations)
  return (
 <RecommendationListContainer>
    <h1>Related recommendations</h1>
      <RecommendationGrid >
      {
        recommendations.map(item => (
          <ProductCard product={item}/>
        ))
      }
         
        
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
