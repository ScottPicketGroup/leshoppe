import React from 'react'
import styled from 'styled-components'


import OrderInfo from './OrderInfo'
import SliderContainer from './SliderContainer'

const ProductContainer = ({product}) => {
    
    return (
        <ProductContainerContainer>
            
            <OrderInfo product={product}/>
            <SliderContainer product={product}/>
        </ProductContainerContainer>
    )
}

export default ProductContainer

export const ProductContainerContainer = styled.div`
display: flex;
height: auto;
width: 100%;
@media screen and (max-width: 450px) {
flex-direction: column;
margin-top: 2.25rem;
}
`