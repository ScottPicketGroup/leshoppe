import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Calander from './calander/Calander'
import {DatePickerWrapper, DateLabel, MDPInput, Input} from './DatePicker.css'

let date = new Date();
      

const DatePicker = ({delivery}) => {

const [openDatePicker, setOpenDatePicker] = useState(false)
const oneDay = 60 * 60 * 24 * 1000
const todayTimestamp = Date.now() - (Date.now() % oneDay + (new Date().getTimezoneOffset() * 1000 * 60))

const [deliveryDate, setDeliveryDate] = useState({

})


useEffect(() => {
    const date = new Date()
    setDeliveryDate({...deliveryDate, month: date.getMonth(), year: date.getFullYear(), day: date.getDay()})
}, [])

const showDatePicker = () => {
    setOpenDatePicker(!openDatePicker)
}


    return (
        <DatePickerWrapper>
            
            <MDPInput
             onClick={showDatePicker}
            >
                <Input type='date' />
                {deliveryDate.day === date ? (
                    <DateLabel>Select {delivery} Date</DateLabel>
                ) : (
                    <DateLabel>{delivery}:  {deliveryDate.day}/{deliveryDate.month}/{deliveryDate.year} </DateLabel>
                )}
            </MDPInput>
            {openDatePicker ? (
                <Calander  setDeliveryDate={setDeliveryDate} deliveryDate={deliveryDate} setOpenDatePicker={setOpenDatePicker}/>
            ): null}
        </DatePickerWrapper>
    )
}

export default DatePicker