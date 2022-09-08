import Image  from './slider-components/Image';
import React from "react"
import SliderControls from "./slider-components/SliderControls"
import { useSwipeable } from "react-swipeable"
import {
  ImageBox,
  Imgbox,
  Wrapper,
} from "./slider-components/slider-components"
import MenuBoard from './slider-components/MenuBoard';

const Carousel = ({ assets, standardWidth, type }) => {
  const [position, setPosition] = React.useState(0)

  const imageArr = assets.map((image, i) => {
    const container = {}
    container.fluid = image.fluid
    container.title = image.title
    container.id = i
    return container
  })

  // use the initialImages as the intial state for the images array.
  const [images, setImages] = React.useState(imageArr)

  // you want to make sure this is set to the width of the widest image
  // const standardWidth = standardWidth

  // called when the left button is clicked
  const moveLeft = () => {
    
    // if the position is above 0, it means we have added the top image to the end of the deck
    // before shifting the position + 1 on to the top of the stack. So we want to remove it from the end

    if (position >= 6 ) {
      // it is an anti-pattern to mutate a state object directly, this creates a new array
      // from images
      const nextImages = Array.from(images)

      // remove the last item from the array
      nextImages.pop()

      // update images width out new array
      setImages(nextImages)
    }
    if (position > 0) setPosition(p => p - 1)
    // decrement the position so the card currently on the top of the stack is shifted
    // back onto the deck
  }
  const moveRight = () => {
    // add the image from the top of the stack to the end of the deck, note, we update
    // it's id to be the length of the images array + 1 to ensure it's position is
    // correctly mapped to it's place in the array.
    console.log(position)
    if (position > -1) {
      setImages(images => [
        ...images,
        { ...images[position], id: images.length },
      ])
    }

    // increment the position to move the first card on the deck onto the top of the stack
    setPosition(p => p + 1)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => moveRight(),
    onSwipedRight: () => moveLeft(),
  })

  return (
    <div {...handlers}>
      <Wrapper>
        {standardWidth &&
          images.map(image => (
            <ImageBox
            type={type}
              image={Number(image.id)}
              gutterWidth={1}
              position={Number(position)}
              standardWidth={standardWidth}
            >
              {image.fluid ?  <Image fluid={image.fluid} /> : <MenuBoard/>}
              
            </ImageBox>
          ))}
      </Wrapper>
      <SliderControls moveLeft={moveLeft} moveRight={moveRight} />
    </div>
  )
}

export default Carousel
