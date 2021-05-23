import React from 'react'

import {graphql, useStaticQuery } from 'gatsby'
import { ImgPortrait } from './image-components'
const aboutPortrait = () => {

const data = useStaticQuery(graphql`
query aboutPortrait {
    allContentfulAsset(filter: {title: {eq: "aboutPortrait"}}) {
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
        <ImgPortrait fluid={fluid} alt={title} />
    )
}

export default aboutPortrait


