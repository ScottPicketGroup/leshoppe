import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "./slider/Carousel"
const MenuBoard = () => {
  const data = useStaticQuery(graphql`
    query assets {
      allContentfulSlider {
        edges {
          node {
            mediaMany {
              title
              description
              file {
                contentType
                fileName
              }
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allContentfulSlider.edges[0].node.mediaMany

  const other = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  return (
    <>
      <MenuBoardPageContainer
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Carousel assets={images} standardWidth={58} type="images"/>
      </MenuBoardPageContainer>
      <MenuBoardPageContainer
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Carousel assets={other} standardWidth={31} type="menu"/>
      </MenuBoardPageContainer>
    </>
  )
}

export default MenuBoard

export const MenuBoardPageContainer = styled.div`
  h1 {
    margin-bottom: 2.25rem;
  }
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 11rem;
  }
`
