import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {P} from '../.././../../../styled-components/GlobalStyles'
import RecommendationsModal from '../Modal/RecommendationsModa;'
const ProductCard = ({product}) => {
 

   
console.log(product.node.images[0].localFile.childImageSharp)


    return (
    
        <ProductCardContainer to={`/shop/products/${product.node.handle}`}>
        <ProductImage
              image={getImage(product.node.images[0].localFile.childImageSharp)}
              alt={product.node.title}
            />
            <ProductCatagory fFD> {product.node.productType}</ProductCatagory>
            <ProductTitle bc2>{product.node.title}</ProductTitle>
            <ProductPrice bc2>${product.node.variants[0].priceV2.amount}</ProductPrice>
            <ProductDescription bc2>{product.node.description}</ProductDescription>
            <ProductLink> <P bc2> View Item</P> </ProductLink>
           
        </ProductCardContainer>

    )

}

export default ProductCard

export const ProductCardContainer = styled(Link)`
width: 33%;
height: 100%;
display: flex;
flex-direction: column;
`
export const ProductImage = styled(GatsbyImage)`
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
