import { a } from "@react-spring/web"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { P } from "../../../../styled-components/GlobalStyles"
import ProductCard from "./ProductCard"
import { ProductGrid } from "./ProductListGrid.css"
import SortDropDown from "./SortDropdown/SortDropDown"
const ProductsListGrid = ({ productList, activeProductType }) => {
  const [sortBy, setSortBy] = useState(0)
  const [productGridItems, setProductGridItems] = useState(productList)

  useEffect(() => {
    setProductGridItems(productList)
  }, [productList])

  useEffect(() => {
    const products = [...productList]

    if (sortBy.id === 0) {
      products.sort(function (a, b) {
        var nameA = a.title.toUpperCase() // ignore upper and lowercase
        var nameB = b.title.toUpperCase() // ignore upper and lowercase
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        // names must be equal
        return 0
      })
      setProductGridItems(products)
    } else if (sortBy.id === 1) {
      products.sort(function (a, b) {
        var nameA = a.title.toUpperCase() // ignore upper and lowercase
        var nameB = b.title.toUpperCase() // ignore upper and lowercase
        if (nameA > nameB) {
          return -1
        }
        if (nameA < nameB) {
          return 1
        }

        // names must be equal
        return 0
      })
      setProductGridItems(products)
    } else if (sortBy.id === 2) {
      setProductGridItems(
        products.sort(
          (a, b) => a.variants[0].priceV2.amount - b.variants[0].priceV2.amount
        )
      )
    } else if (sortBy.id === 3) {
      setProductGridItems(
        products.sort(
          (a, b) => b.variants[0].priceV2.amount - a.variants[0].priceV2.amount
        )
      )
    }
  }, [sortBy])

  return (
    <>
      <SortDropDown sortBy={sortBy} setSortBy={setSortBy} />
      <ProductGrid>
        {productList &&
          productGridItems.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
      </ProductGrid>
    </>
  )
}

export default ProductsListGrid
