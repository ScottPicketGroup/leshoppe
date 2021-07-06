import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ShopCatagoryDropdown from "./shop-components/dropdown/ShopCatagoryDropdown"
import ShopIntro from "./shop-components/ShopIntro"
import ProductList from "./shop-components/product-list/ProductList"
const Shop = () => {
  
 /* 
   const data = useStaticQuery(graphql`
    query Catagories {
      allShopifyProduct {
        edges {
          node {
            productType
          }
        }
      }
    }
  `)

 useEffect(() => {
  data.allShopifyProduct.edges.map(catagory => setCatagories(catagories => [...catagories, catagory.node.productType]))
 }, [])
  const [catagories, setCatagories] = useState([
    "All Products",
    
  ])
  
    */
  const [catagory, setCatagory] = useState("Sort By Catagory")

  return (
    <>
    /*
      {/* <ShopIntro />
      <ShopCatagoryDropdown
        catagory={catagory}
        setCatagory={setCatagory}
        catagories={catagories}
        setCatagories={setCatagories}
      />
      <ProductList catagory={catagory} /> */}
      */
    </>
  )
}

export default Shop
