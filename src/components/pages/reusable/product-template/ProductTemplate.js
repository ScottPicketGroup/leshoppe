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
import Product from "./product/product"
import { useEffect } from "react"
const ProductTemplate = ({ pageContext, state }) => {
const [product, setProduct] = React.useState(pageContext)

useEffect(() => {
  setProduct(pageContext)
}, [pageContext])


  return (
    <Layout>
  
        <Section1>
          <Product product={pageContext}/>
         {
           product ? ( <RecommendationList product={product}/>) : null
         }
      
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

