import React from 'react'
import styled from 'styled-components'
import { P } from '../../../../../styled-components/GlobalStyles'
import CheckBox from '../../../../contact/contact-us/CheckBox'
import DeliveryCheckBox from './OptionCheckBox'
const DeliveryOptions = ({delivery, setDelivery}) => {
    console.log(delivery)
    return (
        <DeliveryCheckBoxWrapper>
         

           

            <CheckBoxOptionWrapper onClick={() => setDelivery("Pick Up")}>
             <DeliveryCheckBox  checked={delivery === "Pick Up" ? true : false}/> 
             <P bc2
             style={{
                 marginLeft: `1rem`
             }}
             >PickUp</P>
            </CheckBoxOptionWrapper> 
            <CheckBoxOptionWrapper onClick={() => setDelivery("Delivery")}>
                <DeliveryCheckBox  checked={delivery === "Delivery" ? true : false}/> 
                <P bc2
                style={{
                    marginLeft: `1rem`
                }}
                >Delivery </P> 
            </CheckBoxOptionWrapper>      
            {delivery === "Delivery" ? (
                <>
                <P bc3
                style={{
                    marginTop: `1rem`
                }}
                >
                    **Delivery only available within the Melbourne CBD
                </P>
                <P bc3
                style={{
                    paddingLeft: `.75rem`, marginBottom: `.25rem`
                }}
                >
                    Minimum delivery $100 - FREE delivery on orders over $300
                </P>
                </>
            ): null}
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
