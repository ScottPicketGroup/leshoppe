import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import {
  GlobalStyle,
  Page,
  Section1,
} from "../../../styled-components/GlobalStyles"
import Footer from "../footer/Footer"
import LogoFooter from "../logo-footer/LogoFooter"
import OrderInfo from "./order-section/OrderInfo"
import ProductContainer from "./order-section/ProductContainer"
import RecommendationList from "./recommendations-section/product-list/ProductList"
import Layout from "../../../layout"
const ProductTemplate = ({ pageContext, state }) => {
console.log(state)
  return (
    <Layout>
  
        <Section1>
          <ProductContainer product={pageContext}/>
          <RecommendationList />
      
        </Section1>
     
    </Layout>
  )
}

export default ProductTemplate

// export const query = graphql`

// query AllProducts {
//   allShopifyProduct(filter: {availableForSale: {eq: true}}) {
//     edges {
//       node {
//         id
//         description
//         handle
//         tags
//         title
//         images {
//           localFile {
//             childImageSharp {
//               fluid {
//                 base64
//                 tracedSVG
//                 srcWebp
//                 srcSetWebp
//                 originalImg
//                 originalName
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

