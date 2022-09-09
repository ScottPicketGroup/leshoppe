import React from "react"
import {
  AvailabilityHeading,
  CardHeading,
  P,
  Pitem,
} from "../../../../../../styled-components/GlobalStyles"
import Renderer from "../../../../../reusable/rich-text-renderers/menuBoard"

import {
  ItemContainer,
  ItemDayContainer,
  ItemsContainer,
  MenuBoardContainer,
} from "./slider-components"

const MenuBoardSingle = ({ itemData }) => {
  const { heading, cardBackground, items, availability } = itemData.itemInfo
 
  return (
    <MenuBoardContainer backgroundImage={cardBackground.fluid.src}>
      
      <CardHeading availability={availability}>{heading}</CardHeading>
      {availability && <AvailabilityHeading availability> {availability}</AvailabilityHeading>}
      <ItemsContainer heading={heading}>
        {items.map((item, i) => (
          <>
            {item.text ? (
              <ItemContainer text heading={heading}>
              <Renderer node={item.text} menuBoard />
              </ItemContainer>
            ) : item.day ? (
              <ItemDayContainer>
                <Pitem>{item.day}</Pitem>
                {item.dayOptionItems.map((item, i) => (
                  <ItemContainer heading={heading}>
                    <Pitem>{item.itemName}</Pitem>
                    <Pitem>{item.itemPrice}</Pitem>
                  </ItemContainer>
                ))}
              </ItemDayContainer>
            ) : (
              <ItemContainer single heading={heading}>
                <Pitem>{item.itemName}</Pitem>
                <Pitem>{item.itemPrice}</Pitem>
              </ItemContainer>
            )}
          </>
        ))}
      </ItemsContainer>
    </MenuBoardContainer>
  )
}

export default MenuBoardSingle
