import React from "react"
import styled from "styled-components"
import { Button, P } from "../../../../styled-components/GlobalStyles"

import ProductQauntityDropdown from "./dropdown/ProductQauntityDropdown"
const OrderInfo = ({product}) => {
  const {title, price, productType, description} = product
  console.log(product)
  return (
    <OrderInfoContainer>
      <TextContainer>
        <CatagoryLabel FLF>{productType}</CatagoryLabel>
        <ProductTitle>{title}</ProductTitle>
        <Price bc1>${product.variants[0].priceV2.amount}</Price>
        <Description bc2>
      {description}
        </Description>
      </TextContainer>

      <ButtonsContainer>
        <ProductQauntityDropdown />
        <ButtonI cart>
          <ButtonILabel>ADD TO CART </ButtonILabel>
        </ButtonI>
      </ButtonsContainer>
    </OrderInfoContainer>
  )
}

export default OrderInfo

export const OrderInfoContainer = styled.div`
  width: 33%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  
    
  
  @media screen and (max-width: 450px) {
    width: 100%;
}
`
export const TextContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`
export const CatagoryLabel = styled(P)`
color: #153E35;
font-size: 1.25rem;
margin-bottom: 2.25rem;
opacity: 75%;
@media screen and (max-width: 450px) {
  margin-bottom: 1rem !important;
  margin-top: 2.25rem;
}
`
export const ProductTitle = styled.h1`
margin-bottom: 2.25rem !important;
@media screen and (max-width: 450px) {
  margin-bottom: 1rem !important;
}
`
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
}
`
export const Price = styled(P)`
margin-bottom: 2.25rem !important;
@media screen and (max-width: 450px) {
  margin-bottom: 1rem !important;
}
`
export const Description = styled(P)`
margin-bottom: 56px;
`

export const ButtonI = styled(Button)`
  position: relative;
  width: 45%;
  height: 2.875rem;
  padding: 0;
 
  color: ${props => (props.cart ? `#FDF9EE` : "153E35")};
  background: ${props => (props.cart ? `#153E35` : "")};
  :hover {
    background: ${props => (props.cart ? `#FDF9EE` : "")};
    color: ${props => (props.cart ? `#153E35` : "153E35")};
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 2.25rem;
}
`
export const ButtonILabel = styled(P)`
  font-size: 1rem;
  color: ${props => (props.open ? "grey" : "")};
`
