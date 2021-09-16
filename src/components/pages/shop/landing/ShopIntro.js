import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
const ShopIntro = () => {
  return (
    <ShopIntroContainer>
      <h1>Le Shoppe Shop</h1>
      <P bc1>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam
      </P>
    </ShopIntroContainer>
  )
}

export default ShopIntro

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
