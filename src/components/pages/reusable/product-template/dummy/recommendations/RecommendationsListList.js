import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import ProductCard from "./ProductCard"

import { GlobalStateContext } from "../../../../../context/GlobalContextProvider"


const RecommendationsList = ({ product }) => {

  const state = useContext(GlobalStateContext)
  const [recommendations, setRecommendations] = useState()

  useEffect(() => {
    const products = []
    state.products &&
    state.products.map(item => {
      if (item.category === product.category)
      console.log(item)
      products.push(item)
        products.map((product, i) => {
             if (i > 2) products.pop()
           })
           setRecommendations(products)
    })
   
    // state.products &&
    //   state.products.map(product => {
    //     if (product.category === product.category)
    //       products.push(product)
    //   })
    // products.map((product, i) => {
    //   if (i > 2) products.pop()
    // })
    // setRecommendations(products)
  }, [state])

console.log(`recommendations`, product)

  return (
  
      <ProductGrid >
        {/* {data.allShopifyProduct.edges.map(product => (
          <ProductCard product={product} catagory={catagory}/>
        ))} */}

        {
        recommendations && recommendations.map(
        product => (<ProductCard product={product} />)
          )
                    
        
        }
     
      </ProductGrid>
  
  )
}

export default RecommendationsList

export const ProductGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`
