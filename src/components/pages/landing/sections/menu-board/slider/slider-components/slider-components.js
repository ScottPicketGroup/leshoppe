import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
export const SliderContainer = styled.div`
  width: 100%;
  background: blue;
  display: flex;
  flex-grow: 1;
  position: relative;

  overflow: hidden;
`
export const SlideContainer = styled.div`
  min-width: 100%;
`
export const StyledImg = styled(Img)``

export const SliderControls = styled.div`
  position: absolute;
  
  width: 100%;
  height: 100%;
`
export const Forward = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  position: absolute;
  right: 2.5%;
  top: 50%;
  border: none;
  border: 1px solid black;
  
  font-family: Arial;
  font-weight: bold;
  z-index: 1;
`
export const Back = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  
  position: absolute;
  left: 2.5%;
  top: 50%;
  border: none;
  border: 1px solid black;
  font-family: Arial;
  font-weight: bold;
  z-index: 1;
`
export const FullScreen = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  position: absolute;
  right: 2.5%;
  bottom: 2.5%;
  border: none;
  border: 1px solid black;
  font-family: Arial;
  font-weight: bold;


`
export const FullScreenLightBoxContainer = styled.div`
height: 100vh;
width: 100vw;
overflow: hidden;
box-sizing: border-box;
margin: 0;
position: absolute;
z-index: 200;
background: black;
display: ${props => props.openLightbox ? "flex" : "none"};
`
export const CloseButton = styled.div`
position: absolute;
top: 3.5%;
right: 2%;
color: black;

padding: .25rem .5rem;
margin: 0;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
font-size: 2rem;
z-index: 2;
`
export const ModalSliderContainer = styled.div`
  min-width: 100%;
  position: absolute;
`
export const ModalForward = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  position: absolute;
  top: 50%;
  right: 2.5%;
  border: none;
  border: 1px solid black;
  
  font-family: Arial;
  font-weight: bold;
  z-index: 1000;
`
export const ModalBack = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  
  position: absolute;
  left: 2.5%;
  top: 50%;
  border: none;
  border: 1px solid black;
  font-family: Arial;
  font-weight: bold;
  z-index: 1000;
  `

export const ImageBox = styled.div`
  min-width: ${props => props.standardWidth}%;
  z-index: ${props => props.image};
  aspect-ratio: ${props => props.type === "menu" ? '4/5' : '4/3'};
  background-color: ${props => props.backgroundColor};
  transition: margin-left 1s ease;
  transition-timing-function: ease;
  margin-right: ${props => props.gutterWidth}%;
  margin-left: ${props => {
    const { image, gutterWidth, position, standardWidth } = props;
    console.log('standardwidth', standardWidth)
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
      return `-${standardWidth + gutterWidth}%;`
    }
    // other wise, don't add any left margin to it
    return '0px;'
  }}  ;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 450px) {
    min-width: 100%;
    min-height: 80vw;
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
      return `-101%`
    }
    // other wise, don't add any left margin to it
    return '0px;'
  }}  ;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;

`
export const Imgbox = styled(Img)`
height: 100%;
width: 100%;
`
export const MenuBoardContainer = styled.div`
  height: 100%;
width: 100%;
background: darkgray;
`;