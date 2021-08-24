import React, {useContext, useState, useEffect} from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../../context/GlobalContextProvider"
import CatagoriesDisplay from "../Catagories/CatagoriesDisplay"

const ProductList = ({ products, catagory, catagories, setCatagory, setMenuLabel, menuLabel }) => {
const [displayProducts, setDisplayProducts] = useState()
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const data = useStaticQuery(graphql`
  query DisplayAllProducts {
    allShopifyProduct(filter: { availableForSale: { eq: true } }) {
      edges {
        node {
          id
          description
          handle
          tags
          title
          productType
          variants {
            priceV2 {
              amount
            }
          }
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  `)

  useEffect(() => {
    const products = []
  data.allShopifyProduct.edges.map (
      product => {
        if(catagory === "All Products" || catagory === "Sort By Catagory" ) products.push(product)
  
        else if(product.category === catagory) products.push(product)
      }
    )
    setDisplayProducts(products)
  }, [catagory])

  return (
    <div>
   {catagory === "Sort By Catagory" ? (
     <CatagoriesDisplay catagories={catagories} setCatagory={setCatagory} setMenuLabel={setMenuLabel}/>
   )
   : 
   catagory === "Select a catagory" ? (
    <CatagoriesDisplay catagories={catagories} setCatagory={setCatagory} setMenuLabel={setMenuLabel}/>
   ) :
   (
    <ProductGrid >
    {data.allShopifyProduct.edges.map(product => (
      <ProductCard product={product} catagory={catagory}/>
    ))}
    
  </ProductGrid>
   )}
      
    </div>
  )
}

export default ProductList

export const ProductGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`
