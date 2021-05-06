import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from "gatsby-image"
import { P } from '../../../../styled-components/GlobalStyles'
const ProductCard = ({product, catagory}) => {
    const {title, images, productType, variants, description} = product.node
    const productTypeDisplay = productType.charAt(0).toUpperCase()+ productType.slice(1)
    const catagoryDisplay = catagory.charAt(0).toUpperCase()+ catagory.slice(1)
    

    return (
        <>
      {  productTypeDisplay ===  catagoryDisplay  ? (
        <ProductCardContainer>
  <ProductImage fluid={images[0].localFile.childImageSharp.fluid} alt="blah"/>
            <ProductCatagory fFD> {productType.charAt(0).toUpperCase() + productType.slice(1)}</ProductCatagory>
            <ProductTitle bc2>{title}</ProductTitle>
            <ProductPrice bc2>${variants[0].priceV2.amount}</ProductPrice>
            <ProductDescription bc2>{description}</ProductDescription>
            <ProductLink> <P bc2> View Item</P> </ProductLink>
            
        </ProductCardContainer>) : 
        catagory === 'All Products'  ?
        (
            <ProductCardContainer>
  <ProductImage fluid={images[0].localFile.childImageSharp.fluid} alt="blah"/>
            <ProductCatagory fFD> {productType.charAt(0).toUpperCase() + productType.slice(1)}</ProductCatagory>
            <ProductTitle bc2>{title}</ProductTitle>
            <ProductPrice bc2>${variants[0].priceV2.amount}</ProductPrice>
            <ProductDescription bc2>{description}</ProductDescription>
            <ProductLink> <P bc2> View Item</P> </ProductLink>
            </ProductCardContainer>
        ) : null
        }
    </>
    )

}

export default ProductCard

export const ProductCardContainer = styled.div`
width: 35.5rem;
height: 100%;
display: flex;
flex-direction: column;
`
export const ProductImage = styled(Img)`
margin-bottom: 1.75rem;
`
export const ProductCatagory = styled(P)`
margin-bottom: 1.75rem;
`
export const ProductTitle = styled(P)`

`
export const ProductPrice = styled(P)`
margin-bottom: 1.75rem;
`
export const ProductDescription = styled(P)`
margin-bottom: 2.25rem;
`

export const ProductLink = styled(Link)`
:hover {
    opacity: 75%;
}
`
