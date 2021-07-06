import React from "react"
import styled from "styled-components"
import { P } from "../../styled-components/GlobalStyles"
import img1 from "../../../images/laNuit.gif"
const LaNuit = () => {
  return (
    <IntroContainer>
      <GifLandscape img src={img1} alt="Otter dancing with a fish"/>
     

      <IntroText
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Pintro bc1> Introducing Le Shoppe ‘la Nuit’</Pintro>
        <Pintro bc2 >
          The latest CBD destination for a pre-dinner aperitif or intimate night
          cap.
        </Pintro>
        <Pintro bc2>
          Whether you’re en route to dinner at Chancery Lane, or simply after a
          romantic tipple with a special someone, Le Shoppe La Nuit offers a
          succinct but exciting selection of European aperitivi and aperitifs
          served in an intimate locale that will transport you to the laneways
          of Paris.
        </Pintro>
        <Pintro bc2>
          Gather your friends, partners, strangers, lovers and settle in. Le
          Shoppe transitions to ‘La Nuit’ Wednesday – Friday evenings from 5pm –
          9pm.
        </Pintro>
      </IntroText>
    </IntroContainer>
  )
}

export default LaNuit

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin-bottom: 13.5rem;
  @media (max-width: 450px) {
    margin-bottom: 6rem;
  }
`

export const GifLandscape = styled.img`
  width: 58%;

  height: 100%;
  @media (max-width: 450px) {
    width: 75%;
    display: flex;
    order: 1;
   
  }
`
export const IntroText = styled.div`
  width: 33%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 3.5rem;
    margin-top: 3.5rem;
  }
`
export const Pintro = styled(P)`
  margin-bottom: 24px;
  :first-child {
    margin-bottom: 28px;
  }
  @media screen and (max-width: 450px) {
    margin-bottom: 24px;
  }
`
