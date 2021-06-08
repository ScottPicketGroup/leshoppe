import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { P } from "../../../../styled-components/GlobalStyles"
import ProductCard from "./ProductCard"
const ProductList = ({ products, catagory }) => {
  // const data = useStaticQuery(graphql`
  // query DisplayAllProducts {
  //   allShopifyProduct(filter: { availableForSale: { eq: true } }) {
  //     edges {
  //       node {
  //         id
  //         description
  //         handle
  //         tags
  //         title
  //         productType
  //         variants {
  //           priceV2 {
  //             amount
  //           }
  //         }
  //         images {
  //           localFile {
  //             childImageSharp {
  //               fluid {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // `)
  return (
    <div>
   
      <ProductGrid >
        {/* {data.allShopifyProduct.edges.map(product => (
          <ProductCard product={product} catagory={catagory}/>
        ))} */}
      </ProductGrid>
    </div>
  )
}

export default ProductList

export const ProductGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`
