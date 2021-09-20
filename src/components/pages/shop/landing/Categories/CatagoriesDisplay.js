import React from "react"
import { P } from "../../../../styled-components/GlobalStyles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  CatagoryWrapper,
  CatagoryCardContainer,
  CatagoryLink,
  CatagoryDescription,
  CatagoryTitle,
} from "./CatagoriesDisplay.css"

const CatagoriesDisplay = ({ categories, setCategory }) => {
  
  return (
    <CatagoryWrapper>
      {categories &&
        categories.map((category, index) => (
          <React.Fragment key={index}>
            {category.image ? (
              <CatagoryCardContainer
                onClick={() => setCategory(category.title)}
                to="products"
                state={{category}}
                
              >
                <GatsbyImage
                  image={getImage(category.image.localFile.childImageSharp)}
                />
                <CatagoryTitle
                  bc1
                  style={{
                    marginTop: `2rem`,
                  }}
                >
                  {category.title}
                </CatagoryTitle>

                <CatagoryDescription
                  bc1
                  style={{
                    marginTop: `1rem`,
                  }}
                >
                  {category.description}
                </CatagoryDescription>
                <CatagoryLink>
                  <P bc3>View Products</P>
                </CatagoryLink>
              </CatagoryCardContainer>
            ) : null}
          </React.Fragment>
        ))}
    </CatagoryWrapper>
  )
}

export default CatagoriesDisplay
