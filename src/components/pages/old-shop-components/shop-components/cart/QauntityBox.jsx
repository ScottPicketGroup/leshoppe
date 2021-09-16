import React from "react"
import styled from "styled-components"
const QauntityBox = ({ itemQauntity, setItemQantity, setSubtotal }) => {
  const reduceQauntity = () => {
    if (itemQauntity && itemQauntity > 0) setItemQantity(itemQauntity - 1)
  }
  const increaseQauntity = () => {
   setItemQantity(itemQauntity + 1)
  }

  return (
    <QauntityCounterContainer>
      <IncrimentContainer onClick={reduceQauntity}>-</IncrimentContainer>
      <QauntityContainer>{itemQauntity}</QauntityContainer>
      <IncrimentContainer onClick={increaseQauntity}>+</IncrimentContainer>
    </QauntityCounterContainer>
  )
}

export default QauntityBox

export const QauntityCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8%;
  border: 1px solid black;

  height: 35px;
`
export const IncrimentContainer = styled.button`
  background: none;
  border: none;
  height: 35px;
  width: 35px;
  padding: 0 0.75rem;
`
export const QauntityContainer = styled.div``
