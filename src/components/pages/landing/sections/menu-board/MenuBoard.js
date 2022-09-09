import React from "react"
import styled from "styled-components"
import MenuBoardCarousel from "./slider/MenuBoardCarousel"

import NewCarousel from "./slider/MenuBoardCarousel"
const MenuBoard = ({ menuBoardContent }) => {


  return (
    <MenuBoardPageContainer
      data-sal="fade"
      data-sal-delay="100"
      data-sal-duration="500"
      data-sal-easing="ease"
    >
     { menuBoardContent &&  <MenuBoardCarousel elements={menuBoardContent}/>}
    </MenuBoardPageContainer>
  )
}

export default MenuBoard

export const MenuBoardPageContainer = styled.div`
  h1 {
    margin-bottom: 2.25rem;
  }
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 11rem;
  }
`
