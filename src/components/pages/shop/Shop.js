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
import CatagoriesDisplay from "./shop-components/Catagories/CatagoriesDisplay"
const Shop = ({imageHeight}) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [catagory, setCatagory] = useState("Sort By Catagory")
  const [catagories, setCatagories] = useState([
    "All Products",
    
  ])
   const data = useStaticQuery(graphql`
   query Catagories {
    allShopifyCollection {
      edges {
        node {
          title
          image {
            id
            src
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5)
              }
            }
          }
          handle
          description
          descriptionHtml
        }
      }
    }
  }
  `)

console.log(catagories)
 useEffect(() => {
  const catagoriesToPush = []
  data.allShopifyCollection.edges.map(catagory => catagoriesToPush.push(catagory.node))
  
  

  const arr = []
  state.products && state.products.map(item => {
   arr.push(item.category) 
  })
  
  const removeDuplicates = catagoriesToPush.filter(function(item, pos) {
    return catagoriesToPush.indexOf(item) == pos
  })
  const catagoryList = catagories.concat(removeDuplicates)
setCatagories(catagoryList)
 }, [])
 
  
  
  

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
      
      {/* <ProductList catagory={catagory} /> */}
      <CatagoriesDisplay catagories={catagories}/>
    </>
  )
}

export default Shop
