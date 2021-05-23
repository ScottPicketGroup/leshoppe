import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql, useStaticQuery } from 'gatsby'
const IntroLandscape = () => {

const data = useStaticQuery(graphql`
query introLandscape {
    allContentfulAsset(filter: {title: {eq: "introLandscape"}}) {
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
console.log(`data`, data.allContentfulAsset.edges[0].node.fluid)
    return (
        <ImgLandscape fluid={data.allContentfulAsset.edges[0].node.fluid} alt='meh' />
    )
}

export default IntroLandscape

export const ImgLandscape = styled(Img)`
  width: 57%;
  @media screen and (max-width: 450px) {
    width: 75%;
    align-self: flex-end;
  }
`