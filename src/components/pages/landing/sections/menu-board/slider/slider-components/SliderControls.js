import React from "react"
import styled from "styled-components"

import BackIcon from "./backIcon"
import ForwardIcon from "./forwardIcon"
import Title from "./Title"

const SliderControls = ({ slideLive, setSlideLive, numOfSlides, titleText }) => {
  const leftArrow = () => {
    if (slideLive > 0) setSlideLive(slideLive - 1)
  }

  const rightArrow = () => {
    if (slideLive > -1 && slideLive < numOfSlides - 1)
      setSlideLive(slideLive + 1)
  }

  return (
    <SliderControlsContainer>
      <Title titleText={titleText} />
      <ControlsContainer>
        <Control onClick={rightArrow}>
          <BackIcon />
        </Control>
        <Control onClick={leftArrow} style={{ marginLeft: `1rem` }}>
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
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    display: none;
  }
`

export const Control = styled.div``
export const ControlsContainer = styled.div`
  width: 16%;
  display: flex;
  justify-content: space-between;
`
