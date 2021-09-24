import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Section2 } from "../../../components/styled-components/GlobalStyles"
import ProductCard from "../../../components/pages/shop/categories-list/ProductGrid/ProductCard"

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from "swiper/core";
import "../../../../node_modules/swiper/swiper-bundle.min.css"
SwiperCore.use([Navigation]);

const Recommedations = ({ location }) => {
  const { state } = location;
  const productType = state.product.productType;
  const title = state.product.title;
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
      <div>
        <IntroContainer>
          <h1>Other things for consideration</h1>
        </IntroContainer>
        <SliderContainer>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              "448": {
                slidesPerView: 1,
              },
              "768": {
                slidesPerView: 2,
              },
              "990": {
                slidesPerView: 3,
              }
            }}
          >
            {products.length && products.map((product, index) =>
              <SwiperSlide key={index}>
                <ProductCard style={{ width: "100%" }} product={product} />
              </SwiperSlide>
            )}
          </Swiper>
        </SliderContainer>
      </div>
    </Section2>
  </Layout>
  )
}

export default Recommedations;

export const IntroContainer = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    margin-bottom: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`

export const SliderContainer = styled.div`
  position: relative;
  .swiper { 
    position: unset;
  }

  .swiper-button-prev {
    top: 30%;
    left: -40px;
    color: #707070;
  }

  .swiper-button-next {
    top: 30%;
    right: -40px;
    color: #707070;
  }

  @media screen and (max-width: 450px) {
    .swiper-button-prev {
      left: 0px;
    }
  
    .swiper-button-next {
      right: 0px;
    }
  }
`