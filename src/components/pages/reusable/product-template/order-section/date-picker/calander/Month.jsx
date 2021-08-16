import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
const Month = ({setDeliveryDate, deliveryDate}) => {
    const [monthHeading, setMonthHeading] = useState()
    const date = new Date()
    const currentMonth = date.getMonth()
    
   
 
    const nextMonth = () => {
        if(deliveryDate.month < 12) {
            setDeliveryDate({...deliveryDate, month: deliveryDate.month + 1})
        } else {
            setDeliveryDate({...deliveryDate, month: 1, year: deliveryDate.year + 1})
        }
    }

    const previousMonth = () => {
        if(deliveryDate.month > currentMonth) {
            setDeliveryDate({...deliveryDate, month: deliveryDate.month - 1})
        } 
    }
  
    console.log(deliveryDate)
    return (
        <MonthWrapper>
           <span 
           style={{
               visibility: `${deliveryDate.month > currentMonth + 1? `visible` : `hidden`}`
           }}
        onClick={previousMonth}> left </span> <span>{Months[deliveryDate.month -1]}</span> <span onClick={nextMonth}> Next </span>
        </MonthWrapper>
    )
}

export default Month

export const MonthWrapper = styled.div`
display: flex;
justify-content: space-between;
padding: .25rem 1rem;
background: #153e35;
color: white;
`
export const Months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]