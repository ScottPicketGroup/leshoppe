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
  */
  useEffect(() => {
      
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
  
    .then(json=> 
      dispatch({
        type: "PRODUCTS",
        products: json
      })
      )
      .then(
        dispatch({
          type: "CART",
          cart: true
        })
        )
  },[])
 useEffect(() => {
  // data.allShopifyProduct.edges.map(catagory => setCatagories(catagories => [...catagories, catagory.node.productType]))
  // state.products && state.products.map(item => setCatagories(catagories => [...catagories, item.category]))

  const arr = []
  state.products && state.products.map(item => {
   arr.push(item.category) 
  })
  
  const removeDuplicates = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos
  })
  const catagoryList = catagories.concat(removeDuplicates)
setCatagories(catagoryList)
 }, [state])
  const [catagories, setCatagories] = useState([
    "All Products",
    
  ])
  
  
  const [catagory, setCatagory] = useState("Sort By Catagory")

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
