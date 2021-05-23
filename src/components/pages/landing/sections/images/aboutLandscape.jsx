import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql, useStaticQuery } from 'gatsby'
import { ImgLandscape } from './introLandscape'
const AboutLandscape = () => {

const data = useStaticQuery(graphql`
query imageone {
    allContentfulAsset(filter: {title: {eq: "aboutLandscape"}}) {
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
        <ImgLandscape fluid={fluid} alt={title} />
    )
}

export default AboutLandscape
