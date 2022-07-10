import React from 'react'
import styled from 'styled-components'
import { P } from '../../../../styled-components/GlobalStyles'
const Catagories = ({catagories, setCatagory ,setMenuLabel}) => {
   const setCatgoryAndLabel = (catagory) => {
    setCatagory(catagory) 
    setMenuLabel(catagory)
   }
    return (
        <CatagoriesContainer>
            {catagories.map((catagory, i) => (
                <P bc2 onClick={() => setCatgoryAndLabel(catagory)}> {catagory}</P>
            ))}
        </CatagoriesContainer>
    )
}

export default Catagories

export const CatagoriesContainer = styled.div`

`
