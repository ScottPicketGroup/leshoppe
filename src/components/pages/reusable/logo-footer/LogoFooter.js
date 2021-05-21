import React, { useState, useEffect, useRef } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { padding } from "../../../styled-components/variables"
import Img from "gatsby-image"
import ImageSlider from './ImageSlider'
import MenuImageSlider from "./ImageSlider"
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
    <LogoFooterContainer margin={marginLeft}>
      {logos.map(link => (
        <LogoLink
          key={link.id}
          href={`http://${link.description}`}
          target="_blank"
        >
          {" "}
          <Image fluid={link.fluid} width={imageWidth} />
        </LogoLink>
      ))}
    </LogoFooterContainer>
  )
}

export default LogoFooter



export const LogoFooterContainer = styled.div`
  width: 99vw;
  height: 150px;
  position: relative;
  z-index: 2;
  padding: 0.5rem 0rem;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
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
