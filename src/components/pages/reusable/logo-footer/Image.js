import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Img from "gatsby-image"



const Image = ({ fluid, zIndex, slideLive, setSlideLive, slideId}) => {
 const [pos, setPos] = useState(1)

useEffect(() => {
  setPos((slideLive * 10)  + (slideId + 2))
}, [])

useEffect(() => {

}, [slideLive])
 let img = useRef(null)

 


  return (
    <ImageBox
    ref={el => (img = el)}
      slideId={slideId}
      slideLive={slideLive}
      transformMobile={`translateX(${90 * slideId}vw)`}
      pos={pos}
        >
            
      <SliderImage fluid={fluid} zIndex={zIndex + 1} />
     
    </ImageBox>
  )
}

export default Image

export const ImageBox = styled.div`
 height: 10%;
 width: 8%;
 
 margin-right: -6rem;
  transition: left 1s ease-in-out;
  z-index: ${props => props.zIndex};
  transform: ${props => `translateX(${(props.slideLive * 10)  + (props.slideId + 2)}vw)`};
  
  position: relative;

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
