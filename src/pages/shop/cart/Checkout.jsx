// import React, { useContext, useState, useEffect } from "react"
// import {Link} from 'gatsby'
// import styled from "styled-components"
// import Item from "./Item"
// import { GlobalStateContext } from "../../../components/context/GlobalContextProvider"
// import { Section1 } from "../../../components/styled-components/GlobalStyles"
// import CartHeadings from "./CartHeadings"
// const CheckOut = () => {
//   const state = useContext(GlobalStateContext)
//   const [itemsInCart, setItemsInCart] = useState(0)
//   const [subTotal, setSubtotal] = useState(0)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart"))
//     cartItems && setItemsInCart(cartItems)
//   }, [state])
//   console.log(subTotal)
//   return (
//     <Section1  style={{paddingBottom: `13.5rem`}}>
//       <CartTitle marginTop="-1rem" marginBottom="5rem">
//         Shopping Cart
//       </CartTitle>

//       <CartHeadings/>

//      { itemsInCart ? (
//           <CartDisplayContainer>
//           {itemsInCart &&
//             itemsInCart.map(item => (
//               <Item item={item.item} qauntity={item.amount} subTotal={subTotal} setSubtotal={setSubtotal} />
//             ))}
//         </CartDisplayContainer>
//      ) : (
//          <CartDisplayContainer>Your cart is empty, return to the shop to add items to your cart.</CartDisplayContainer>
//      )}

//      <SubTotalContainer marginTop="72px" marginBottom="72px">
//          <SubtotalHeading>Subtotal</SubtotalHeading>
//          <SubTotal>${subTotal}</SubTotal>
//      </SubTotalContainer>
//      <SubTotalContainer>
//          <ContinueLink to="/shop">Continue Shopping</ContinueLink>
//          <CheckoutLink >Checkout</CheckoutLink>
//      </SubTotalContainer>
//     </Section1>
//   )
// }

// export default CheckOut

// export const CartDisplayContainer = styled.div`

//   min-width: 100%;
// `
// export const CartTitle = styled.h1`
//   margin-top: ${props => (props.marginTop ? props.marginTop : "")};
//   margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
// `
// export const SubTotalContainer = styled.div`
//   margin-top: ${props => (props.marginTop ? props.marginTop : "")};
//   margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
// width: 100%;
// display: flex;
// justify-content: space-between;
// `

// export const SubtotalHeading = styled.h2`
//   color: grey;
// `

// export const SubTotal = styled.h2`

// `
// export const ContinueLink = styled(Link)`
// text-decoration: none;
// color: #153E35;
// font-size: 1rem;
// `

// export const CheckoutLink = styled.a`
// text-decoration: none;
// font-size: 1rem;
// color: #FDF9EE;
// background: #153E35;
// padding: .5rem 3.25rem;
// transition: all .2s ease-in-out;
// :hover {
//   color: #153E35;
// background: #FDF9EE;
// border: 1px solid #153E35;
// }
// `