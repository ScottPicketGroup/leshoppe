import React from 'react'
import styled from 'styled-components'
const MenuBoard = () => {
    return (
        <MenuBoardPageContainer>
            <h1>Menu Board</h1>
            <MenuImageSliderContainer/>
        </MenuBoardPageContainer>
    )
}

export default MenuBoard

export const MenuBoardPageContainer = styled.div`
h1 {
    margin-bottom: 2.25rem;
}

`

export const MenuImageSliderContainer = styled.div`
width: 96vw;
height: 80vh;
padding: 0;
background: palegreen;

`