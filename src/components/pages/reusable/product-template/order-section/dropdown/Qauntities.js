import React from "react"
import styled from "styled-components"
import { P } from "../../../../../styled-components/GlobalStyles"
const Qaunitities = ({
  itemsAvailable,
  setQauntity,
  qauntity,
  open,
  setMenuLabel,
}) => {
  const setQaunityAndLabel = qauntity => {
    setQauntity(qauntity)
    
  }
  return (
    <QaunititiesContainer>
      <QauntityLabel onClick={() => setQaunityAndLabel(1)}>{qauntity}</QauntityLabel>
    </QaunititiesContainer>
  )
}

export default Qaunitities

export const QaunititiesContainer = styled.div``

export const QauntityLabel = styled(P)`
display: flex;
width: 100%;
align-items: center;
  font-size: 1rem;
  padding: .25rem 0 1rem 0;
  color: ${props => (props.open ? "grey" : "")};
  @media screen and (max-width: 450px) {
padding: .15rem 0;
}

`