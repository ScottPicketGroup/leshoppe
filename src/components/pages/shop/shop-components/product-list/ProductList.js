import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { P } from "../../../../styled-components/GlobalStyles"
import ProductCard from "./ProductCard"
const ProductList = ({ products, catagory }) => {
  const data = useStaticQuery(graphql`
    query allProducts {
      allShopifyProduct(filter: { availableForSale: { eq: true } }) {
        edges {
          node {
            id
            description
            handle
            tags
            title
            productType
            variants {
              priceV2 {
                amount
              }
            }
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {/* {catagory == "Sort By Catagory" ? (
        <P bc1> All prodcuts </P>
      ) : (
        <P bc1> {catagory}</P>
      )}{" "} */}
      <ProductGrid >
        {data.allShopifyProduct.edges.map(product => (
          <ProductCard product={product} catagory={catagory}/>
        ))}
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
  margin-bottom: 13.5rem;
`
