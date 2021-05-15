import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { P } from "../../../../styled-components/GlobalStyles"
const ProductCard = ({ product, catagory }) => {
  const {
    title,
    images,
    productType,
    variants,
    description,
    handle,
  } = product.node
  const productTypeDisplay =
    productType.charAt(0).toUpperCase() + productType.slice(1)
  const catagoryDisplay = catagory.charAt(0).toUpperCase() + catagory.slice(1)
  console.log(product.node.handle)

  return (
    <>
      {productTypeDisplay === catagoryDisplay ? (
        <ProductCardContainer>
          <ProductLink to={`/shop/products/${product.node.handle}`}>
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
          <ProductLink to={`/shop/products/${product.node.handle}`}>
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
      ) : null}
    </>
  )
}

export default ProductCard

export const ProductCardContainer = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 0;
}
`
export const ProductImage = styled(Img)`
  margin-bottom: 1.75rem;
`
export const ProductCatagory = styled(P)`
  margin-bottom: 1.75rem;
  font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: .75rem;
    margin-bottom: 1rem;
}
`
export const ProductTitle = styled(P)`
font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 1rem;
}
`
export const ProductPrice = styled(P)`
  margin-bottom: 1.75rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`
export const ProductDescription = styled(P)`
  margin-bottom: 2.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`

export const ProductLink = styled(Link)`
  :hover {
    opacity: 75%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
}
`
