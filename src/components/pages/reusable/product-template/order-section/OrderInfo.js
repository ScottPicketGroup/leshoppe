import React from "react"
import styled from "styled-components"
import { Button, P } from "../../../../styled-components/GlobalStyles"

import ProductQauntityDropdown from "./dropdown/ProductQauntityDropdown"
const OrderInfo = () => {
  return (
    <OrderInfoContainer>
      <TextContainer>
        <CatagoryLabel FLF>Category</CatagoryLabel>
        <h1>Merchandise Item 01 Second Line allowance</h1>
        <Price bc1>$price</Price>
        <P bc2>
          {" "}
          The acquisition of our newest site in Little Collins Street sees our
          first footprint into the top end of Melbourne’s CBD. Housed in the
          historic Normanby Chambers building, Scott Pickett and the team have
          re-imagined the former Bistro Vue site to become an instant classic.
          Returning to its most successful incarnation, Chancery Lane will
          return the space to a European-inspired bistro – albeit with an edge.
        </P>
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
  width: 40%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  h1 {
    margin-bottom: 2.25rem;
  }
`
export const TextContainer = styled.div`
  width: 80%;
`
export const CatagoryLabel = styled(P)`
color: #153E35;
font-size: 1.25rem;
margin-bottom: 2.25rem;
opacity: 75%;
`

export const ButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`
export const Price = styled(P)`
  margin-bottom: 2.25rem;
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
`
export const ButtonILabel = styled(P)`
  font-size: 1rem;
  color: ${props => (props.open ? "grey" : "")};
`
