import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import MenuImageSlider from "./slider/MenuImageSlider"
import { P } from "../../../../styled-components/GlobalStyles"
import SliderControls from "./slider/slider-components/SliderControls"
import Title from "./slider/slider-components/Title"
const MenuBoard = () => {
  const [title, setTitle] = useState("boob")
  const data = useStaticQuery(graphql`
    query mem {
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
  const menuBoardImages = data.allContentfulSlider.edges[0].node.mediaMany

  const [slideLive, setSlideLive] = useState(1)

  return (
    <MenuBoardPageContainer>
      {/* <h1>Menu Board</h1> */}
      <MenuImageSlider
        assets={menuBoardImages}
        slideLive={slideLive}
        setSlideLive={setSlideLive}
        setTitle={setTitle}
        numOfSlides={menuBoardImages.length}
      />
  
      <SliderControls
        slideLive={slideLive}
        setSlideLive={setSlideLive}
        numOfSlides={menuBoardImages.length}
        titleText={title}
      >
    

      </SliderControls>
    </MenuBoardPageContainer>
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
