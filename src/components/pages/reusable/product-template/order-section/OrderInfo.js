import React from 'react'
import styled from 'styled-components'
import { Button, P } from '../../../../styled-components/GlobalStyles'
import ProductContainer from './ProductContainer'
import SliderContainer from './SliderContainer'
const OrderInfo = () => {
    return (
        <OrderInfoContainer>
          <TextContainer>
          <h1>Merchandise Item 01
Second Line allowance</h1>
      <Price bc1>$price</Price>
      <P bc2> The acquisition of our newest site in Little Collins Street sees our first footprint into the top end of Melbourne’s CBD. Housed in the historic Normanby Chambers building, Scott Pickett and the team have re-imagined the former Bistro Vue site to become an instant classic. Returning to its most successful incarnation, Chancery Lane will return the space to a European-inspired bistro – albeit with an edge.</P>
</TextContainer>
<ButtonsContainer>
  <ButtonI>Dropdown</ButtonI>
  <ButtonI>Add To Cart</ButtonI>
</ButtonsContainer>
        </OrderInfoContainer>
    )
}

export default OrderInfo

export const OrderInfoContainer = styled.div`
width: 40%;
height: 700px;
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
export const ButtonsContainer = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
`
export const Price = styled(P) `
margin-bottom: 2.25rem;
`

export const ButtonI = styled(Button)`
width: 45%;
`