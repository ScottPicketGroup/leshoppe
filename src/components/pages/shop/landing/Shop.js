import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import CategoriesDisplay from "./Categories/CatagoriesDisplay"

const Shop = () => {
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([])

  const data = useStaticQuery(graphql`
    query FilteredData {
      allShopifyCollection(
        filter: {
          title: { in: ["Le Shoppe Catering", "Lunchbox", "Provedore"] }
        }
      ) {
        edges {
          node {
            id
            title
            description
            descriptionHtml
            handle
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            products {
              id
              title
              description
              descriptionHtml
              handle
              images {
                localFile {
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
              productType
              variants {
                priceV2 {
                  amount
                }
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const categoryList = data.allShopifyCollection.edges.map(
      category => category.node
    )
    setCategories(categoryList.reverse())
  }, [])

  return (
    <>
      <CategoriesDisplay categories={categories} setCategory={setCategory}/>
    </>
  )
}

export default Shop
