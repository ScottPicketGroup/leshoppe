import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { P } from "../../../../../styled-components/GlobalStyles"

const ProductCard = ({ product }) => {
      const {
        title,
        description,
        price,
        image,
        category,
        id
      } = product
      
console.log(product)

  return (
    <>
   
      <ProductCardContainer>
        <ProductLink to={`/shop/products/${id}`}
       
        ><ImageContainer>
          <ProductImage
            src={image}
            alt="blah"
          />
          </ImageContainer>
          <DescrptionContainer>
                <ProductCatagory fFD>
            {" "}
            {category.charAt(0).toUpperCase() + category.slice(1)}
                </ProductCatagory>
               <ProductTitle bc2>{title}</ProductTitle>
                <ProductPrice bc2>${price}</ProductPrice>
             <ProductDescription bc2>{description}</ProductDescription>
           <P bc2> View Item</P>{" "}
          </DescrptionContainer>
        </ProductLink>
        
      </ProductCardContainer>


  
  
     
 
    </>
  )
}

export default ProductCard

export const ProductCardContainer = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
align-items: center;
  justify-content: center;
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 0;
}
`

export const ImageContainer = styled.div`
width: 100%;
height: 75%;
background: white;
aspect-ratio: 4/3;
display:flex;
justify-content: center;
`
export const DescrptionContainer = styled.div`
width: 100%;

height: auto;
display:flex;
flex-direction: column;
justify-content: flex-start;
`

export const ProductImage = styled.img`
max-height: 18rem;
margin-bottom: 1rem;
margin-top: 1rem;
`
export const ProductCatagory = styled(P)`
margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: .75rem;
    margin-bottom: 1rem;
}
`
export const ProductTitle = styled(P)`
font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 1rem;
}
`
export const ProductPrice = styled(P)`
  margin-bottom: 1.75rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`
export const ProductDescription = styled(P)`
  margin-bottom: 2.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`

export const ProductLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  :hover {
    opacity: 75%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
}
`
