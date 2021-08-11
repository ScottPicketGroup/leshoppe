import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { GlobalStateContext } from "../../../components/context/GlobalContextProvider"
import { P } from "../../../components/styled-components/GlobalStyles"
const CartIcon = () => {
  const state = useContext(GlobalStateContext)
  const [itemsInCart, setItemsInCart] = useState(0)

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"))
    cartItems && setItemsInCart(cartItems.length)
  }, [state])

  return (
    <Cart to="/shop/cart">
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="30.14"
        height="40"
        viewBox="0 0 30.14 40"
      >
        <g
          id="Group_6269"
          data-name="Group 6269"
          transform="translate(-20.3 -10.7)"
        >
          <path
            id="Path_11805"
            data-name="Path 11805"
            d="M35.4,10.7a7.993,7.993,0,0,0-7.98,7.98v3.2H20.808a.48.48,0,0,0-.508.508V40.027A10.672,10.672,0,0,0,30.973,50.7h8.793A10.672,10.672,0,0,0,50.44,40.027V22.39a.48.48,0,0,0-.508-.508H43.324v-3.2A7.918,7.918,0,0,0,35.4,10.7Zm-6.963,7.929a6.963,6.963,0,1,1,13.926,0v3.2H28.432ZM49.474,22.9V40.027a9.653,9.653,0,0,1-9.657,9.657H30.973a9.653,9.653,0,0,1-9.657-9.657V22.9h6.1v7.268h1.017V22.9H42.308v7.268h1.017V22.9Z"
            fill="#153e35"
          ></path>
        </g>
      </Icon>
      <ItemsInCart>{itemsInCart}</ItemsInCart>
    </Cart>
  )
}

export default CartIcon

export const Cart = styled(Link)`
  height: 35px;
  width: 30px;
  display: relative;
  margin-top: -0.5rem;
  margin-right: 2rem;
`

export const Icon = styled.svg`
  display: flex;
`

export const ItemsInCart = styled(P)`
  position: absolute;
  top: 28px;
  font-size: 12pt;

  width: 29.5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
