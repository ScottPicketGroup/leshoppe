import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { P } from '../../../../../styled-components/GlobalStyles'
import CheckBox from './CheckBox'
const CheckBoxes = ({variants, selected, setSelected}) => {
    const [variantsList, setVariantsList] = useState()
   
    useEffect(() => {
        const variantList = []
        variants.map(item => {
          
          if(variantList.length < variants.length) variantList.push({item: item.title, selected: false})
        setVariantsList(variantList)
        })
            
    }, [variants])
console.log(selected)
    return (
        <CheckBoxWrapper>
            {variantsList && variantsList.map((checkbox, i) => (
               <CheckBoxOptionWrapper onClick={() => setSelected(i)}>
               <CheckBox selected={selected} id={i}/>
               <CheckBoxLabel bc2> {checkbox.item}</CheckBoxLabel>
               </CheckBoxOptionWrapper>
            ))}
           
        </CheckBoxWrapper>
    )
}

export default CheckBoxes

const CheckBoxWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2.25rem;
`
const CheckBoxOptionWrapper = styled.div`
display: flex;
`
const CheckBoxLabel= styled(P)`
margin-left: 1rem;
`