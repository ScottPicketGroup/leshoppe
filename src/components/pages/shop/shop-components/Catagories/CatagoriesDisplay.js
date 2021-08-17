import React from 'react'
import styled from 'styled-components'
const CatagoriesDisplay = ({catagories}) => {
    console.log(catagories)
    return (
        <>
      {/* {productTypeDisplay === catagoryDisplay ? (
        <ProductCardContainer>
          <ProductLink to={`/shop/products/${handle}`}>
            <ProductImage
              fluid={images[0].localFile.childImageSharp.fluid}
              alt="blah"
            />
            <ProductCatagory fFD>
              {" "}
              {productType.charAt(0).toUpperCase() + productType.slice(1)}
            </ProductCatagory>
            <ProductTitle bc2>{title}</ProductTitle>
            <ProductPrice bc2>${variants[0].priceV2.amount}</ProductPrice>
            <ProductDescription bc2>{description}</ProductDescription>
            <P bc2> View Item</P>{" "}
          </ProductLink>
        </ProductCardContainer>
      ) : catagory === "All Products" || catagory === "Sort By Catagory" ? (
        <ProductCardContainer>
          <ProductLink to={`/shop/products/${handle}`}>
            <ProductImage
              fluid={images[0].localFile.childImageSharp.fluid}
              alt="blah"
            />
            <ProductCatagory fFD>
              {" "}
              {productType.charAt(0).toUpperCase() + productType.slice(1)}
            </ProductCatagory>
            <ProductTitle bc2>{title}</ProductTitle>
            <ProductPrice bc2>${variants[0].priceV2.amount}</ProductPrice>
            <ProductDescription bc2>{description}</ProductDescription>
            <P bc2> View Item</P>{" "}
          </ProductLink>
        </ProductCardContainer>
      ) : null} */}
    </>
    )
}

export default CatagoriesDisplay