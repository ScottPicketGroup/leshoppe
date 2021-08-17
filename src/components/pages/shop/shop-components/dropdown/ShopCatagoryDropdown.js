import React, { useState, useRef } from "react"
import styled from "styled-components"
import { gsap, Power0 } from "gsap"
import { P } from "../../../../styled-components/GlobalStyles"
import DropdownArrow from "./DropdownArrow"
import Catagories from "./Catagories"
const ShopCatagoryDropdown = ({
  catagories,
  catagory,
  setCatagories,
  setCatagory,
  setMenuLabel,
  menuLabel
}) => {
  const [open, setOpen] = useState(false)

  let menu = useRef(null)

  const openMenu = () => {
    setOpen(!open)
    !open
      ? gsap.to(menu, 0.2, {
          height: `auto`,
          ease: Power0,
        })
      : gsap.to(menu, 0.2, {
          height: `28px`,
          ease: Power0,
        })
  }

  return (
    <ShopCatagoryDropdownContainer
      ref={el => (menu = el)}
      onClick={openMenu}
      open={open}
    >
      <Menu>
        <First bc2 open={open}>
          {menuLabel}
          
        </First>
        <DropdownArrow open={open} />
      </Menu>

      <Catagories
        catagories={catagories}
        setCatagories={setCatagories}
        setCatagory={setCatagory}
        catagory={catagory}
        open={open}
        setMenuLabel={setMenuLabel}
      />
    </ShopCatagoryDropdownContainer>
  )
}

export default ShopCatagoryDropdown

const ShopCatagoryDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.5%;
  overflow: hidden;
  margin-bottom: 6rem;
  height: 28px;
  @media screen and (max-width: 450px) {
    width: 50%;
}
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`
export const First = styled(P)`
  color: ${props => (props.open ? "grey" : "")};
`
