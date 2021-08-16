import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
const Days = ({setDeliveryDate, deliveryDate, setOpenDatePicker}) => {
const [selected, setSelected] = useState()

const date = new Date()
const month = deliveryDate.month
const year = date.getYear()
const daysInMonth = new Date(year, month, 0).getDate()




   
    
    let firstDayAvailable = date.getDate() + 2
    let numberOfDays = 40 - new Date(year, 10, 40).getDate();
   
    let firstDay = (new Date(year, month)).getDay();
 
   


    

    
    

    // last dates of last month
    let lastMonthNumberOfDays = firstDay - 1
    const daysInLastMonth = []
    const lastMonthDates = Array.apply(null, Array(numberOfDays)).map((val, idx) => idx).reverse().map((date, i) => i < lastMonthNumberOfDays ? daysInLastMonth.unshift(date) : null)
    
    // dates of current month
    const dates = Array.apply(null, Array(numberOfDays)).map((val, idx) => idx + 1)
   
    // dates for beginning of following month
    const daysAtEndOfMonth = 42 - lastMonthNumberOfDays - numberOfDays
    const endOfMonthDates = Array.apply(null, Array(daysAtEndOfMonth)).map((val, idx) => idx +1)

    // whole component dates to map out 

    const datesToDisplay = daysInLastMonth.concat(dates, endOfMonthDates)

    console.log(selected)

    const handleSelectedDate = (date) => {
        setSelected(date)
        setDeliveryDate({...deliveryDate, day: date})
        setOpenDatePicker(false)
    }
    return (
        <DaysWrapper>
            <MonthWrapper>
            {days.map((day, i) => (
                <DayLetter color={i ===0 || i === 6 ? 'grey' : 'inherit'}
                style={{background: `white`}}
                >{day}</DayLetter>
            ))}
            </MonthWrapper>

<Wrapper>
            {datesToDisplay.map((date, i) => (
                <Day 
                i={i}
                date={date}
                firstDay={firstDay - 1}
                lastDays={firstDay+dates.length -2}
                selected={selected} 
                onClick={() => handleSelectedDate(date)}
                

                > {date}</Day>
            ))}
                  
            </Wrapper>
            
        </DaysWrapper>
    )
}

export default Days

const days = [
    "S", 'M', "T", "W", "T", "F", "S"
]



export const DaysWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: .5rem;
`

export const MonthWrapper = styled.div`
display: flex;
margin: 0;
`
export const DayLetter = styled.div`
olor: ${props => props.color};
text-decoration: underline;
padding: .5rem;
display:flex;
justify-content: center;
align-items: center;
flex: 1 0 14.25%;

`

export const Day = styled.div`
color: ${props => props.i < props.firstDay || props.i > props.lastDays ? 'grey' : 'black'};
text-decoration: ${props => props.underline ? 'underline' : ''};
padding: .5rem;
display:flex;
justify-content: center;
align-items: center;
flex: 1 0 14.25%;
background: ${props => props.i > props.firstDay && props.i < props.lastDays && props.date === props.selected ? 'black' : ''};
color: ${props => props.i > props.firstDay && props.i < props.lastDays && props.date === props.selected  ? 'white' : ''};
:hover {
    border: 1px solid black;
}
`
export const Wrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`