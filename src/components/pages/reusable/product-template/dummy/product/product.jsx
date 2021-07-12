import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import {P} from '../../../../../styled-components/GlobalStyles'
import ProductQauntityDropdown from './dropdown/ProductQauntityDropdown'
import Slider from './ProductCarousel.jsx/Slider'
const Product = ({product}) => {
    const {
        title,
        description,
        price,
        image,
        category,
        endpointId
      } = product.product
      console.log(product)
    return (
        <ProductContainer>
            <ProductTextConatiner>
                <ProductInfoContainer>
                <ProductCatagory fFD>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </ProductCatagory>
               <ProductTitle bc1>{title}</ProductTitle>
                <ProductPrice bc2>${price}</ProductPrice>
             <ProductDescription bc2>{description}</ProductDescription>
                </ProductInfoContainer>
                <ProductPurchaseContainer>
              
                    <ProductQauntityDropdown/>
                    <AddToCartButton>Add To Cart</AddToCartButton>
                </ProductPurchaseContainer>
            </ProductTextConatiner>

            <ProductCarousel>
          <Slider image={image}/>
            </ProductCarousel>
        </ProductContainer>
    )
}

export default Product

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
min-height: 100vh;
margin-bottom: 9.5rem;
`
export const ProductTextConatiner = styled.div`
width: 40%;
height: 10rem;

`
export const ProductInfoContainer = styled.div`
width: 80%;
`
export const ProductPurchaseContainer = styled.div`
width: 80%;
display: flex;
justify-content: space-between;

`

export const ProductCarousel = styled.div`

height: 100vh;
width: 60%;
`

export const ProductCatagory = styled(P)`
margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    font-size: .75rem;
    margin-bottom: 1rem;
}
`
export const ProductTitle = styled(P)`
font-size: 2.25rem;
  @media screen and (max-width: 450px) {
    font-size: 2rem;
    margin-bottom: 1rem;
}
`
export const ProductPrice = styled(P)`
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`
export const ProductDescription = styled(P)`
  margin-bottom: 1.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`

export const ProductLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  :hover {
    opacity: 75%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
}
`

export const AddToCartButton = styled.button`
    display: flex;
  flex-direction: column;
  width: 48%;
  height: 1.9rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  background: #153e35;
  border: none;
  color: #fdf9ee;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
    height: 2.25rem;
}
`