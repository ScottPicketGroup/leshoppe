import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql, useStaticQuery } from 'gatsby'
import { ImgLandscape } from './image-components'
const MenuLandscape = () => {

const data = useStaticQuery(graphql`
query menuLandscape {
    allContentfulAsset(filter: {title: {eq: "menuLandscape"}}) {
      edges {
        node {
          id
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  
`)
const {fluid, title} = data.allContentfulAsset.edges[0].node
    return (
        <ImgLandscape fluid={fluid} alt={title} full/>
    )
}

export default MenuLandscape

