import React from 'react'
import styled from 'styled-components'
import { P } from '../../../../../styled-components/GlobalStyles'
import CheckBox from '../../../../contact/contact-us/CheckBox'
import DeliveryCheckBox from './OptionCheckBox'
const DeliveryOptions = ({delivery, setDelivery}) => {
    console.log(delivery)
    return (
        <DeliveryCheckBoxWrapper>
         

            <CheckBoxOptionWrapper onClick={() => setDelivery("Delivery")}>
                <DeliveryCheckBox  checked={delivery === "Delivery" ? true : false}/> 
                <P bc2
                style={{
                    marginLeft: `1rem`
                }}
                >Delivery </P> <P bc3>(Only available in Melbourne CBD)</P>
            </CheckBoxOptionWrapper>

            <CheckBoxOptionWrapper onClick={() => setDelivery("Pick Up")}>
             <DeliveryCheckBox  checked={delivery === "Pick Up" ? true : false}/> 
             <P bc2
             style={{
                 marginLeft: `1rem`
             }}
             >PickUp</P>
            </CheckBoxOptionWrapper>       
        </DeliveryCheckBoxWrapper>
    )
}

export default DeliveryOptions

export const DeliveryCheckBoxWrapper = styled.div`

margin-bottom: 1rem;
`

export const CheckBoxOptionWrapper = styled.div`
display: flex;
`
