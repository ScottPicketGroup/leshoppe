import React from 'react';
import styled, { css } from 'styled-components';

export const ImageBox = styled.div`
  min-width: ${props => props.standardWidth}px;
  z-index: ${props => props.image};
  height: 674px;
  background-color: ${props => props.backgroundColor};
  transition: margin-left 1s ease;
  margin-right: ${props => props.gutterWidth}px;
  margin-left: ${props => {
    const { image, gutterWidth, position, standardWidth } = props;
    // the stack are the images on the left of the screen.
    // We want to ensure the position is above zero as it's always at the bottom of 
    // the stack.
    // 
    // Position is the top card on the stack. So if the image is greater than
    // the position, it's right of the stack (aka on the deck).
    const onStack = position > 0 && image <= position;
    // if the image is not on the stack, we want to bump it over the standard width
    // of all images plus the gutter width (padding between images)
    if (image > 0 && onStack) {
      return `-${standardWidth + gutterWidth}px;`
    }
    // other wise, don't add any left margin to it
    return '0px;'
  }}  ;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 120%;
  margin-top: 10rem;
  padding-bottom: 10rem;
`

const Carousel = (props) => {
  const [position, setPosition] = React.useState(0);

  // this is a stub for the array of images that will be coming through.
  // when the carousel loads, you will need to iterate through it and assign
  // it an id that MUST be a number (aka force casst it to a Number(id))
  const initialImages = React.useMemo(() => {
    return [
      { color: 'lightgray', id: 0 },
      { color: 'red', id: 1 },
      { color: 'lightblue', id: 2 },
      { color: 'green', id: 3 },
      { color: 'palegoldenrod', id: 4 },
    ]
  }, [])

  // use the initialImages as the intial state for the images array.
  const [images, setImages] = React.useState(initialImages);

  // you want to make sure this is set to the width of the widest image
  const standardWidth = 1012;

  // called when the left button is clicked
  const moveLeft = () => {
    // if the position is above 0, it means we have added the top image to the end of the deck
    // before shifting the position + 1 on to the top of the stack. So we want to remove it from the end

    if (position >= 0) {
      // it is an anti-pattern to mutate a state object directly, this creates a new array
      // from images
      const nextImages = Array.from(images);

      // remove the last item from the array
      nextImages.pop();

      // update images width out new array
      setImages(nextImages);
    }

    // decrement the position so the card currently on the top of the stack is shifted
    // back onto the deck
    setPosition(p => p - 1);
  }
  const moveRight = () => {

    // add the image from the top of the stack to the end of the deck, note, we update
    // it's id to be the length of the images array + 1 to ensure it's position is 
    // correctly mapped to it's place in the array.

if (position > 0) {
      setImages(images => [
        ...images,
        { ...images[position], id: images.length }
      ])
    }

    // increment the position to move the first card on the deck onto the top of the stack
    setPosition(p => p + 1)
  }
console.log(images)
  return (
    <div style={{marginTop: `10rem`}}>
      <h4>Position: {position}</h4>

      <button onClick={moveLeft}>left</button>
      <button onClick={moveRight}> right</button>
      <Wrapper>
        {images.map((image) => (
          <ImageBox
            image={Number(image.id)}
            gutterWidth={10}
            position={Number(position)}
            standardWidth={standardWidth}
            backgroundColor={image.color}
          >
            <b>Image number: {image.id}  </b>
            <br />
            <b>Position: {position} </b>
            <br />
            <b>color: {image.color} </b>
          </ImageBox>
        ))}
      </Wrapper>
    </div>
  )
}

export default Carousel;