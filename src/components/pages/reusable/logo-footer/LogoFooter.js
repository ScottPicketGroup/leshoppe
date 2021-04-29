import React, { useState, useEffect, useRef } from "react"
import { graphql, Link, useStaticQuery} from "gatsby"
import styled from "styled-components"
import { padding } from "../../../styled-components/variables"
import Img from 'gatsby-image'
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
  console.log(`logos`, logos)
  const marginLeft = padding.menu * 2
  const imageWidth = logos.length

  return (
    <LogoFooterContainer margin={marginLeft}>
      {logos.map(link => (
        <LogoLink key={link.id} href={`http://${link.description}`} target="_blank">
          {" "}
          
          <Image fluid={link.fluid} width={imageWidth} />
        </LogoLink>
      ))}
    </LogoFooterContainer>
  )
}

export default LogoFooter

export const LogoFooterContainer = styled.div`
  width: 100vw;

  
  margin-left: -5.5rem;
  padding: .5rem 0rem;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid black;
border-bottom:  1px solid black;
`
export const LogoLink = styled.a`
  text-decoration: none;
  color: black;
  transition: all .3s ease-in-out;
  :hover {
      opacity: 75%;
      transform: scale(1.1)
  }
`
export const Image = styled(Img)`
width: ${props => props.width / 2}rem;
margin: .5rem;
`