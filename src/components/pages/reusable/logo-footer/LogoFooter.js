import React, { useState, useEffect, useRef } from "react"
import { graphql, Link, useStaticQuery,  withPrefix } from "gatsby"
import styled from "styled-components"
import { padding } from "../../../styled-components/variables"
import Img from "gatsby-image"
import ImageSlider from './ImageSlider'


import { Helmet } from "react-helmet"
import FooterLogoSlider from "./ImageSlider"
import FooterSlider from "./footerSlider"
const LogoFooter = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulLogoFooter {
        edges {
          node {
            icons {
              description
              title
              id
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const logos = data.allContentfulLogoFooter.edges[0].node.icons

  const marginLeft = padding.menu * 2
  const imageWidth = logos.length
 
  const [slideLive, setSlideLive] = useState(10)


  return (
    <LogoFooterContainer>
           <Helmet>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
     
     <FooterSlider logos={logos}/>
    </LogoFooterContainer>
  )
}

export default LogoFooter



export const LogoFooterContainer = styled.div`

 width: 99vw;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
 height: auto;
 padding: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  overflow: hidden;
  @media screen and (max-width: 450px) {
    flex-wrap: nowrap;
    padding: 0;
    width: 100vw !important;
    margin: 0;
    justify-content: flex-start;
    
  }
`
export const Logo = styled.div`
height: 100%;
position: relative; 
width: 100%;
background: brown;
`
export const LogoLink = styled.a`
  text-decoration: none;
  color: black;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 75%;
 
  }
  
  @media screen and (max-width: 450px) {
    padding: .6rem;
  }
`
export const Image = styled(Img)`
  width: ${props => props.width / 2}rem;
  margin: 0.5rem;
  @media screen and (max-width: 450px) {
    width: ${props => props.width / 1.62}rem;
}
`
