import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { P } from "../../../../styled-components/GlobalStyles"
import ProductDescription from "./ProductDescription"
const ProductCard = ({ product }) => {
  const {
    title,
    images,
    variants,
    descriptionHtml,
    handle,
  } = product

  return (
    <ProductCardContainer>
      <ProductLink to={`/shop/products/${handle}`}>
        <ProductImage
          image={getImage(images[0].localFile.childrenImageSharp[0])}
          alt={title}
        />
        <ProductTitle bc2>{title}</ProductTitle>
        <ProductPrice bc2>${variants[0].priceV2.amount}</ProductPrice>
        <ProductDescription descriptionHtml={descriptionHtml} />
        <ProductButton> View Item </ProductButton>
      </ProductLink>
    </ProductCardContainer>
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
export const ProductImage = styled(GatsbyImage)`
  margin-bottom: 1.75rem;
`
export const ProductCatagory = styled(P)`
  margin-bottom: 1.75rem;
  font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
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

export const ProductLink = styled(Link)`
  :hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
  }
`
export const ProductButton = styled.button`
  border: 1px solid black;
  background: none;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  ${ProductLink}:hover & {
    background: #153e35;
    color: #fdf9ee;
  }
`
