import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
const CategoryListLanding = ({ title, image, description }) => {
  return (
    <ShopIntroContainer>
      <h1>{title}</h1>
      <P bc1>{description}</P>
      <CatagoryImage image={getImage(image.localFile.childImageSharp)} />
    </ShopIntroContainer>
  )
}

export default CategoryListLanding
export const ShopIntroContainer = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    margin-bottom: 2.25rem;
  }
  p {
    margin-bottom: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`
export const CatagoryImage = styled(GatsbyImage)`
  margin-bottom: 1.75rem;
  max-width: 80%;
`