import React from 'react'
import styled from 'styled-components'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import CheckOut from '../../components/pages/shop/shop-components/cart/Checkout'
const Cart = () => {
    return (
      <Layout>
         <SEO title="Checkout" />
         <CheckOut/>
      </Layout>
    )
}

export default Cart