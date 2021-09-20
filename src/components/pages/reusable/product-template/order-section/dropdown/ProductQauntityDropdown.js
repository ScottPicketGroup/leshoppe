import React, { useState, useRef } from "react"
import styled from "styled-components"
import { gsap, Power0, Power1 } from "gsap"
import { P } from "../../../../../styled-components/GlobalStyles"
import DropdownArrow from "./DropdownArrow"
import Qauntities from "./Qauntities"
import installMediaQueryWatcher from './mediaQueryWatcher'
const ProductQauntityDropdown = ({variants}) => {
  const [open, setOpen] = useState(false)
  const [menuLabel, setMenuLabel] = useState("QAUNTITY - ")
  const [itemsAvailable, setItemsAvailable] = useState(10)
  const [qauntity, setQauntity] = useState(1)
  let menu = useRef(null)

  const openMenu = () => { 
    installMediaQueryWatcher("(max-width: 600px", function(matches) {
      if (matches) {
        !open
      ? gsap.to(menu, 0.2, {
          height: `auto`,
          ease: Power1,
        })
      : gsap.to(menu, 0.2, {
          height: `2.25rem`,
          ease: Power0,
        })
        
      } else {
        !open
      ? gsap.to(menu, 0.2, {
          height: `auto`,
          ease: Power0,
        })
      : gsap.to(menu, 0.2, {
          height: `2.875rem`,
          ease: Power0,
        })
        setOpen(!open)
      }
    }
      
      ) 
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
  display: flex;
  align-items: center;
  border: 1px solid #153e35;
  border-radius: 1px;
  transition: all .2s ease-in-out;
  :hover {
    background: #153e35;
    color: #fdf9ee;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
    height: 2.25rem;
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
