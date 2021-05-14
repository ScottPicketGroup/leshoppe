import React, {useState} from 'react'
import styled from 'styled-components'
const SliderContainer = () => {
const [mouseStart, setMouseStart] = useState(0)
const [mouseEnd, SetMouseEnd] = useState()


const dragSlideStart = (e) => {
    // setMouseStart()
    console.log(e.pageX)
}

const dragSlideEnd =  (e) => {
    console.log(e.pageX)
}

const mouseMove = e => {
    if (e.pageX > (mouseStart + 300))  {
        setMouseStart(e.pageX)
        console.log('boob')} else {console.log('nope')}
    
}
    return (
        <SliderContainerContainer
        
        >
            <Slide1
             draggable="true"
            //  onMouseDown={dragSlideStart}
            onMouseUp={dragSlideEnd}
            onMouseMove={mouseMove}
            ></Slide1>
            <Slide2></Slide2>
        </SliderContainerContainer>
    )
}

export default SliderContainer

const SliderContainerContainer = styled.div`
width: 60%;
background: purple;
height: 500px;
display: flex;
`

const Slide1 = styled.div`
height: 100%;
width: 50%;
background: khaki;
`
const Slide2 = styled.div`
height: 100%;
width: 50%;
background: whitesmoke;
`