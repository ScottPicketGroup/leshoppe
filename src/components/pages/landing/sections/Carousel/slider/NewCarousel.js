import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SliderControls from "./slider-components/SliderControls"
import { useSwipeable } from "react-swipeable"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NewCarousel = ({ galleryImages }) => {
  const [position, setPosition] = React.useState(0)
  const [images, setImages] = useState([])

  // you want to make sure this is set to the width of the widest image
  const standardWidth = 58
  // called when the left button is clicked
  const moveLeft = () => {
    // if the position is above 0, it means we have added the top image to the end of the deck
    // before shifting the position + 1 on to the top of the stack. So we want to remove it from the end

    if (position >= 5) {
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

    if (position > 0) {
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
  useEffect(() => {
    const imageArr = galleryImages.map((image, i) => {
      const container = {}
      container.image = image.gatsbyImageData
      container.title = image.title
      container.id = i
      return container
    })
    setImages(imageArr)
  }, [])

  return (
    <div {...handlers}>
      <Wrapper>
        {images.map(image => (
          <ImageBox
            image={Number(image.id)}
            gutterWidth={1}
            position={Number(position)}
            standardWidth={standardWidth}
          >
            <Imgbox
            alt=""
              image={getImage(image.image)}
              style={{ minheight: "100%", width: "100%" }}
            />
          </ImageBox>
        ))}
      </Wrapper>
      <SliderControls moveLeft={moveLeft} moveRight={moveRight} />
    </div>
  )
}

export default NewCarousel

export const ImageBox = styled.div`
  min-width: ${props => props.standardWidth}%;
  z-index: ${props => props.image};
  height: 38.66vw;
  background-color: ${props => props.backgroundColor};
  transition: margin-left 1s ease;
  transition-timing-function: ease;
  margin-right: ${props => props.gutterWidth}%;
  margin-left: ${props => {
    const { image, gutterWidth, position, standardWidth } = props
    // the stack are the images on the left of the screen.
    // We want to ensure the position is above zero as it's always at the bottom of
    // the stack.
    //
    // Position is the top card on the stack. So if the image is greater than
    // the position, it's right of the stack (aka on the deck).
    const onStack = position > 0 && image <= position
    // if the image is not on the stack, we want to bump it over the standard width
    // of all images plus the gutter width (padding between images)
    if (image > 0 && onStack) {
      return `-${standardWidth + gutterWidth}%;`
    }
    // other wise, don't add any left margin to it
    return "0px;"
  }};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 450px) {
    min-width: 100%;
    min-height: 80vw;
    margin-left: ${props => {
      const { image, gutterWidth, position, standardWidth } = props
      // the stack are the images on the left of the screen.
      // We want to ensure the position is above zero as it's always at the bottom of
      // the stack.
      //
      // Position is the top card on the stack. So if the image is greater than
      // the position, it's right of the stack (aka on the deck).
      const onStack = position > 0 && image <= position
      // if the image is not on the stack, we want to bump it over the standard width
      // of all images plus the gutter width (padding between images)
      if (image > 0 && onStack) {
        return `-101%`
      }
      // other wise, don't add any left margin to it
      return "0px;"
    }};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
`
export const Imgbox = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
`
