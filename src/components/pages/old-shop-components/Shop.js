import React, { useState, useEffect, useContext } from "react"
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

  const [catagory, setCatagory] = useState("Sort By Catagory")
  const [catagories, setCatagories] = useState([
   { title: "Select a catagory"},
   {title: "All Products"}
    
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

 useEffect(() => {

  const catagoriesToPush =  []
  data.allShopifyCollection.edges.map(catagory => catagoriesToPush.push(catagory.node))
  catagoriesToPush.map(item => {
    if(item.title === "Le Shoppe Catering") catagoriesToPush.unshift(item)
  })
 

 
  const removeDuplicates = catagoriesToPush.filter(function(item, pos) {
    return catagoriesToPush.indexOf(item) == pos
  })
  const catagoryList = catagories.concat(removeDuplicates)
  console.log(catagoryList)
  setCatagories(catagoryList)
 }, [])

 const [menuLabel, setMenuLabel] = useState('Sort By Catagory')
  


  return (
    <>
    <BackgroundLogo imageHeight={imageHeight}/>
    <ShopIntro />
    
      
      <ShopCatagoryDropdown
        catagory={catagory}
        setCatagory={setCatagory}
        catagories={catagories}
        setCatagories={setCatagories}
        setMenuLabel={setMenuLabel}
        menuLabel={menuLabel}
      />
      
      <ProductList catagory={catagory} setMenuLabel={setMenuLabel} setCatagory={setCatagory} catagories={catagories}/>
    
    </>
  )
}

export default Shop