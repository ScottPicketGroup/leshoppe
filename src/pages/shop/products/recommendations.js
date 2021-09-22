import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

const Recommedations = ({ location }) => {
  const { state } = location;
  const productType = state.product.productType;
  const tags = state.product.tags;
  const data = useStaticQuery(graphql`
    query RecommedationsQuery {
      allShopifyProduct{
        edges {
          node {
            id
            handle
            descriptionHtml
            description
            availableForSale
            productType
            tags
            title
            variants {
              priceV2 {
                amount
              }
            }
            images {
              localFile {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }`
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const recommedations = data.allShopifyProduct.edges.filter(({ node }) => node.productType === productType);
    setProducts(recommedations);
  }, [])

  return <div>Recommendations</div>
}

export default Recommedations;