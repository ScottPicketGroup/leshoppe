import React from "react"
import styled from "styled-components"

import BackIcon from "./backIcon"
import ForwardIcon from "./forwardIcon"


const SliderControls = ({moveLeft, moveRight }) => {



  const leftArrow = () => {

  }

  const rightArrow = () => {
  
  }
  
  return (
    <SliderControlsContainer>
     
      <ControlsContainer>
        <Control onClick={moveLeft}>
          <BackIcon />
        </Control>
        <Control onClick={moveRight} style={{ marginLeft: `1rem` }}>
          <ForwardIcon />
        </Control>
      </ControlsContainer>
    </SliderControlsContainer>
  )
}

export default SliderControls

export const SliderControlsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 58%;
  padding-right: .4rem;
  justify-content: flex-end;
  @media screen and (max-width: 450px) {
    display: none;
  }
`

export const Control = styled.div`
  :hover {
    opacity: .75;
  }
`
export const ControlsContainer = styled.div`
  width: 16%;
  display: flex;
  justify-content: space-between;

`
