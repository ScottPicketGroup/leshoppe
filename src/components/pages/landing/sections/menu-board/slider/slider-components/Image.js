import React, {useState, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"



const Image = ({ fluid, zIndex, slideLive, title, setSlideLive, slideId, setTitle, numOfSlides }) => {
  const [mouseStartPos, setMouseStartPos] = useState(0)
  const [mouseEndPos, setMouseEndPos] = useState(0)
  const [mouseDown, setMouseDown] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [pos, setPos] = useState(0)
  useEffect(() => {
   
    if (slideLive == slideId  ) setTitle(title)
    },)
 

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      back()
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      forward()
    }
  }
  const back = () => {
    if (slideLive >= 0) {setSlideLive(slideLive => slideLive +1)} 
}
const forward = () => {
    if (slideLive >= 0) {setSlideLive(slideLive -1)} 
}

  const handleMouseDown = e => {
    setMouseStartPos(e.pageX)
    setMouseDown(true)
  }
  const handleMouseMove = e => {
    if (mouseDown) {
      setMouseEndPos(e.pageX)
    }
  }
  const handleMouseUp = e => {
    console.log(slideLive)
    setMouseDown(false)
    if (mouseEndPos < mouseStartPos && slideLive !== 0 ) {
      forward()
    } else if (mouseEndPos > mouseStartPos && slideLive -1 < numOfSlides || slideLive === 0){back()}
  }



  return (
    <ImageBox
      position={slideLive}
      slideId={slideId}
      zIndex={zIndex}
      slideLive={slideLive}
      transformMobile={`translateX(${90 * slideLive}vw)`}
      onDragEnd={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SliderImage fluid={fluid} zIndex={zIndex + 1} />
     
    </ImageBox>
  )
}

export default Image

export const ImageBox = styled.div`
  width: 58%;
  height: 100%;
  transition: left 1s ease-in-out;
  z-index: ${props => props.zIndex};

  position: absolute;

  @media screen and (max-width: 450px) {
    width: 85vw;
    height: 56vw;
    transform: ${props => props.transformMobile};
  }
`
export const SliderImage = styled(Img)`
  @media screen and (max-width: 450px) {
    width: 85vw;
    height: 100%;
  }
  width: 100%;
  height: 100%;
  margin-right: 1.5rem;
`
