import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SliderControls from "./slider-components/SliderControls"
import { useSwipeable } from "react-swipeable"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageBox, Imgbox, MenuBoardContainer, Wrapper } from "./slider-components/slider-components"
import MenuBoard from "../MenuBoard"
import MenuBoardSingle from "./slider-components/MenuBoardSingle"

const MenuBoardCarousel = ({ elements }) => {
  const [position, setPosition] = React.useState(0)
  const [items, setItems] = useState([])
console.log('elements', items)
  // you want to make sure this is set to the width of the widest image
  const standardWidth = 31
  // called when the left button is clicked
  const moveLeft = () => {
    // if the position is above 0, it means we have added the top image to the end of the deck
    // before shifting the position + 1 on to the top of the stack. So we want to remove it from the end

    if (position >= items.legnth ) {
      // it is an anti-pattern to mutate a state object directly, this creates a new array
      // from items
      const nextItems = Array.from(items)

      // remove the last item from the array
      nextItems.pop()

      // update images width out new array
      setItems(nextItems)
    }
    if (position > 0) setPosition(p => p - 1)
    // decrement the position so the card currently on the top of the stack is shifted
    // back onto the deck
  }
  const moveRight = () => {
    // add the image from the top of the stack to the end of the deck, note, we update
    // it's id to be the length of the images array + 1 to ensure it's position is
    // correctly mapped to it's place in the array.

    if (position > -1) {
      setItems(items => [
        ...items,
        { ...items[position], id: items.length },
      ])
    }
console.log('items', items)
    // increment the position to move the first card on the deck onto the top of the stack
    setPosition(p => p + 1)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => moveRight(),
    onSwipedRight: () => moveLeft(),
  })
  useEffect(() => {

    const itemsArr = elements.map((item, i) => {
      const container = {}
      container.itemInfo = item
      container.id = i
      
      return container
    })
    console.log('itemsArr', itemsArr)
    setItems(itemsArr)
  }, [elements])
  

  return (
    <div {...handlers}>
      <Wrapper>
        {items.map(item => (
          <ImageBox
          type="menu"
            image={Number(item.id)}
            gutterWidth={1}
            position={Number(position)}
            standardWidth={standardWidth}
          >
            <MenuBoardSingle itemData={item}/>
          </ImageBox>
        ))}
      </Wrapper>
      <SliderControls moveLeft={moveLeft} moveRight={moveRight} />
    </div>
  )
}

export default MenuBoardCarousel

