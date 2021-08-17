import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ShopCatagoryDropdown from "./shop-components/dropdown/ShopCatagoryDropdown"
import ShopIntro from "./shop-components/ShopIntro"
import ProductList from "./shop-components/product-list/ProductList"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import BackgroundLogo from "../reusable/background-logo/BackgroundLogo"
const Shop = ({imageHeight}) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [catagory, setCatagory] = useState("Sort By Catagory")
  const [catagories, setCatagories] = useState([
    "All Products",
    
  ])
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

console.log(catagories)
 useEffect(() => {
  const catagoriesToPush = []
  data.allShopifyProduct.edges.map(catagory => catagoriesToPush.push(catagory.node.productType))
  console.log(catagoriesToPush)
  

  const arr = []
  state.products && state.products.map(item => {
   arr.push(item.category) 
  })
  
  const removeDuplicates = catagoriesToPush.filter(function(item, pos) {
    return catagoriesToPush.indexOf(item) == pos
  })
  const catagoryList = catagories.concat(removeDuplicates)
setCatagories(catagoryList)
 }, [data])
 
  
  
  

  return (
    <>
    <BackgroundLogo imageHeight={imageHeight}/>
    <ShopIntro />
    
      
      <ShopCatagoryDropdown
        catagory={catagory}
        setCatagory={setCatagory}
        catagories={catagories}
        setCatagories={setCatagories}
      />
      
      <ProductList catagory={catagory} />
    </>
  )
}

export default Shop
