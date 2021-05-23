import React from 'react'

import {graphql, useStaticQuery } from 'gatsby'
import { ImgPortrait } from './image-components'
const OpeningPortrait = () => {

const data = useStaticQuery(graphql`
query openingPortrait {
    allContentfulAsset(filter: {title: {eq: "openingPortrait"}}) {
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

export default OpeningPortrait


