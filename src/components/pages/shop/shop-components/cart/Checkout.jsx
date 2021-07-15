import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import Item from "./Item"
import { GlobalStateContext } from "../../../../context/GlobalContextProvider"
import { Section1 } from "../../../../styled-components/GlobalStyles"
import CartHeadings from "./CartHeadings"
const CheckOut = () => {
  const state = useContext(GlobalStateContext)
  const [itemsInCart, setItemsInCart] = useState(0)
  const [subTotal, setSubtotal] = useState(0)
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"))
    cartItems && setItemsInCart(cartItems)
  }, [state])
  console.log(subTotal)
  return (
    <Section1  style={{paddingBottom: `13.5rem`}}>
      <CartTitle marginTop="-1rem" marginBottom="5rem">
        Shopping Cart
      </CartTitle>

      <CartHeadings/>

     { itemsInCart ? (
          <CartDisplayContainer>
          {itemsInCart &&
            itemsInCart.map(item => (
              <Item item={item.item} qauntity={item.amount} subTotal={subTotal} setSubtotal={setSubtotal} />
            ))}
        </CartDisplayContainer>
     ) : (
         <CartDisplayContainer>Your cart is empty, return to the shop to add items to your cart.</CartDisplayContainer>
     )}

     <SubTotalContainer>
         <SubtotalHeading>Subtotal</SubtotalHeading>
         <SubTotal>${subTotal}</SubTotal>
     </SubTotalContainer>
    </Section1>
  )
}

export default CheckOut

export const CartDisplayContainer = styled.div`
  min-height: 100vh;
  min-width: 100%;
`
export const CartTitle = styled.h1`
  margin-top: ${props => (props.marginTop ? props.marginTop : "")};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
`
export const SubTotalContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const SubtotalHeading = styled.h2`
  color: grey;
`

export const SubTotal = styled.h2`

`