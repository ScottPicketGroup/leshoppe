import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql, useStaticQuery } from 'gatsby'
import { ImgLandscape } from './image-components'

const ContactLandscape = () => {

const data = useStaticQuery(graphql`
query contactLandscape {
    allContentfulAsset(filter: {title: {eq: "contactLandscape"}}) {
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

export default ContactLandscape

