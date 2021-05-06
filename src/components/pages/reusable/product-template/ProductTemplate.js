import React from 'react'
import styled from 'styled-components'
import { Page, Section1 } from '../../../styled-components/GlobalStyles'
import OrderInfo from './order-section/OrderInfo'
import ProductContainer from './order-section/ProductContainer'
const ProductTemplate = () => {
    return (
        <Page>
            <Section1>
            <ProductContainer/>
            </Section1>
        </Page>
    )
}

export default ProductTemplate