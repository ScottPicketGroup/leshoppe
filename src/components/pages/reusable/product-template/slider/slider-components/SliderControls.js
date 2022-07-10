import React from 'react'
import styled from 'styled-components'
const SliderControls = ({slideLive, setSlideLive}) => {

    const back = () => {
    
        if (slideLive === -2) {setSlideLive(slideLive +1)} 
    }
    const forward = () => {
        if (slideLive > -2) {setSlideLive(slideLive -1)} 
    }
    return (
        <SliderControlsContainer>
        <Control onClick={back}>Back</Control> 
        <Control onClick={forward} style={{marginLeft: `1rem`}}> Forward</Control>
    </SliderControlsContainer>
    )
}

export default SliderControls

export const SliderControlsContainer = styled.div`
padding: 1rem;
display: flex;
width: 50vw;
justify-content: flex-end;

`

export const Control = styled.div`
padding: .5rem 1rem;
border: 1px solid black;
`