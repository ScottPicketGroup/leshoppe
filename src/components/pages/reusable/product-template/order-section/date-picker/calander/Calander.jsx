import React from 'react'
import styled from 'styled-components'
import {DatePickerWrapper, DateLabel, MDPInput, Input, CalanaderWrapper} from '../DatePicker.css'
import Days from './Days'
import Month from './Month'
const Calander = ({setDeliveryDate, deliveryDate, setOpenDatePicker}) => {
    return (
        <CalanaderWrapper>
            <Month setDeliveryDate={setDeliveryDate} deliveryDate={deliveryDate}/>
            <Days setDeliveryDate={setDeliveryDate} deliveryDate={deliveryDate} setOpenDatePicker={setOpenDatePicker}/>
        </CalanaderWrapper>
    )
}

export default Calander