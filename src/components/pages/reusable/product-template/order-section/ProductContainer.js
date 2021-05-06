import React from 'react'
import styled from 'styled-components'


import OrderInfo from './OrderInfo'
import SliderContainer from './SliderContainer'

const ProductContainer = () => {
    return (
        <ProductContainerContainer>
            
            <OrderInfo/>
            <SliderContainer/>
        </ProductContainerContainer>
    )
}

export default ProductContainer

export const ProductContainerContainer = styled.div`
display: flex;
height: auto;
width: 100%;
`