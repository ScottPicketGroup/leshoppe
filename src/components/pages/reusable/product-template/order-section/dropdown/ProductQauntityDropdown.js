import React, { useState, useRef } from "react"
import styled from "styled-components"
import { gsap, Power0 } from "gsap"
import { P } from "../../../../../styled-components/GlobalStyles"
import DropdownArrow from "./DropdownArrow"
import Qauntities from "./Qauntities"
const ProductQauntityDropdown = ({
 
}) => {
  const [open, setOpen] = useState(false)
  const [menuLabel, setMenuLabel] = useState('QAUNTITY - ')
  const [itemsAvailable, setItemsAvailable] = useState(1)
  const [qauntity, setQauntity] = useState(1)
  let menu = useRef(null)

  const openMenu = () => {
    setOpen(!open)
    !open
      ? gsap.to(menu, 0.2, {
          height: `auto`,
          ease: Power0,
        })
      : gsap.to(menu, 0.2, {
        height: `2.875rem`,
          ease: Power0,
        })
  }

  return (
    <ProductQauntityDropdownContainer
      ref={el => (menu = el)}
      onClick={openMenu}
      open={open}
    >
      <Menu>
        <First bc2 open={open}>
          {menuLabel} {qauntity}
          
        </First>
       
      </Menu>

      <Qauntities
        setItemsAvailable={setItemsAvailable}
        itemsAvailable={itemsAvailable}
        setQauntity={setQauntity}
        qauntity={qauntity}
        open={open}
        setMenuLabel={setMenuLabel}
      />
    </ProductQauntityDropdownContainer>
  )
}

export default ProductQauntityDropdown

const ProductQauntityDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 2.875rem;
  overflow: hidden;
  margin-bottom: 6rem;
  display: flex;
  
  align-items: center;

  /* color: ${props => (props.cart ? `#FDF9EE` : "153E35")};
  background: ${props => (props.cart ? `#153E35` : "")}; */
  border: 1px solid #153E35;
        border-radius: 1px;
        :hover {
          background:  #153E35;
          color: #FDF9EE;
        }
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`
export const First = styled(P)`
display: flex;
align-items: center;
  font-size: 1rem;
  height: 2.875rem;
  color: ${props => (props.open ? "grey" : "")};
`
