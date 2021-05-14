import React, { useRef, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { P } from "../../../../../../styled-components/GlobalStyles"

import Title from "./Title"

const Image = ({ fluid, zIndex, slideLive, title, setSlideLive }) => {
  const [mouseStartPos, setMouseStartPos] = useState(0)
  const [mouseEndPos, setMouseEndPos] = useState(0)
  const [mouseDown, setMouseDown] = useState(false)
 

  const back = () => {
    console.log(`slideLive`, slideLive)
    if (slideLive === -1) {setSlideLive(slideLive)} 
}
const forward = () => {
    if (slideLive > -1) {setSlideLive(slideLive => slideLive -1)} 
   
}

const handleMouseDown = e => {
 
  setMouseStartPos(e.pageX)
  setMouseDown(true)
}
const handleMouseMove = e => {
  if (mouseDown) {
    setMouseEndPos(e.pageX)
  console.log(`mouseEndPos`, mouseEndPos)
  }
//  mouseDown ? 
//   console.log(e.pageX) :
//   console.log('mouse not down')
}
const handleMouseUp = e => {
  setMouseDown(false)
  if (e.pageX < mouseStartPos) {forward()} else {back() 
    console.log('nope')}


}
console.log(`mouseDown`, mouseDown)
  return (
    <ImageBox transform={`translateX(${54.55 * slideLive}vw)`}
    transformMobile={`translateX(${90 * slideLive}vw)`}
    onDragEnd={handleMouseUp}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
 
    >
      <SliderImage fluid={fluid} zIndex={zIndex + 1} 
  
      />
      {slideLive * slideLive + 1 === zIndex ? <Title imgTitle={title} /> : null}
    </ImageBox>
  )
}

export default Image

export const ImageBox = styled.div`
  width: 53vw;
  transition: transform 1s ease-in-out;
  z-index: ${props => props.zIndex};
  transform: ${props => props.transform};
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
  width: 53vw;
  height: 100%;
  margin-right: 1.5rem;
`
