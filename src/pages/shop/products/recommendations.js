import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Section2 } from "../../../components/styled-components/GlobalStyles"
import ProductCard from "../../../components/pages/shop/categories-list/ProductGrid/ProductCard"

import Swiper from "react-id-swiper"
import "../../../../node_modules/swiper/swiper-bundle.min.css"

const sliderParams = {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  spaceBetween: 30,
  pagination: '.swiper-pagination',
  freeMode: false
}

const Recommedations = ({ location }) => {
  const { state } = location;
  const productType = state.product.productType;
  const tags = state.product.tags;
  const data = useStaticQuery(graphql`
    query RecommedationsQuery {
      allShopifyProduct{
        nodes {
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
    }`);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const recommedations = data.allShopifyProduct.nodes.filter((node) => node.productType === productType);
    setProducts(recommedations);
  }, [])

  return (<Layout>
    <SEO title="Recommedations" />
    <Section2 >

      <Swiper {...sliderParams} >
        {products.length && products.map((product, index) => <div key={index}> <ProductCard style={{ width: "100%" }} product={product} /></div>)}
      </Swiper>
    </Section2>
  </Layout>
  )
}

export default Recommedations;