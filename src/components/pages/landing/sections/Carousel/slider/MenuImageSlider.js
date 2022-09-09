import React from "react"
import styled from "styled-components"

const MenuImageSlider = ({ assets}) => {
  
  return (
    <MenuImageSliderContainer>
      <Container></Container>
    </MenuImageSliderContainer>
  )
}

export default MenuImageSlider

export const MenuImageSliderContainer = styled.div`
  width: 100%;
  position: relative;
  height: 35.3vw;
  padding: 0;
  display: flex;
`
export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: green;
  transform: ${({ currentImage, image, position }) =>
    `translateX(-${position * 58}%)`};
`
