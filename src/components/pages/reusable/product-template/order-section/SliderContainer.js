import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
const SliderContainer = ({ product }) => {
  const [mouseStart, setMouseStart] = useState(0)
  const [mouseEnd, SetMouseEnd] = useState()

 
  return (
    <div>
    <ProductImage
        fluid={product.product.images[2].localFile.childImageSharp.fluid}
        alt="bleh"
      />
      </div>
  )
}

export default SliderContainer

const SliderContainerContainer = styled.div`
  width: 58%;
  background: purple;
  height: 42.25rem;
  display: flex;
`
export const ProductImage = styled(Img)`
  margin-bottom: 1.75rem;
`
const Slide1 = styled.div`
  height: 100%;
  width: 50%;
  background: khaki;
`
const Slide2 = styled.div`
  height: 100%;
  width: 50%;
  background: whitesmoke;
`
