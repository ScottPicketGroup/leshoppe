import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ShopCatagoryDropdown from "./shop-components/dropdown/ShopCatagoryDropdown"
import ShopIntro from "./shop-components/ShopIntro"
import ProductList from "./shop-components/product-list/ProductList"
const Shop = () => {
  const [catagories, setCatagories] = useState([
    "All Products",
    "Homeware",
    "Bread",
    "Cutlery",
    "Meat"
  ])
  const [catagory, setCatagory] = useState("Sort By Catagory")

  return (
    <div>
      <ShopIntro />
      <ShopCatagoryDropdown
        catagory={catagory}
        setCatagory={setCatagory}
        catagories={catagories}
        setCatagories={setCatagories}
      />
      <ProductList catagory={catagory} />
    </div>
  )
}

export default Shop
