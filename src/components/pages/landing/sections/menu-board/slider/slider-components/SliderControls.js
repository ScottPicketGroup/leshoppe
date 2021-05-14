import React from 'react'
import styled from 'styled-components'

import BackIcon from './backIcon'
import ForwardIcon from './forwardIcon'

const SliderControls = ({slideLive, setSlideLive}) => {

    const back = () => {
        if (slideLive === -2) {setSlideLive(slideLive +1)} 
    }
    const forward = () => {
        if (slideLive > -2) {setSlideLive(slideLive -1)} 
    }
    return (
        <SliderControlsContainer>
        <Control onClick={back}>
            <BackIcon/>
            </Control> 
        <Control onClick={forward} style={{marginLeft: `1rem`}}> 
        <ForwardIcon/>
        </Control>
    </SliderControlsContainer>
    )
}

export default SliderControls

export const SliderControlsContainer = styled.div`
padding: 1rem;
display: flex;
width: 53vw;
justify-content: flex-end;
@media screen and (max-width: 450px) {
    display: none;
  }
`

export const Control = styled.div`

`