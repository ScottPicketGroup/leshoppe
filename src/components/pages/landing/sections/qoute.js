import React from "react"
import styled from "styled-components"
import open from '../../../../images/logos/quoteOpen.svg'
import close from '../../../../images/logos/quoteClose.svg'
const Quote = () => {
  return (
    <QuotePageContainer>
        <QouteIcon src={open} alt="open quote" />
      <QouteContainer>
          
        <h1>
          Like its name, the fit-out pays homage to a previous era; a space
          where opulence and luxury served as a refuge from life outside and a
          chance to indulge in the finer things.
        </h1>
      </QouteContainer>
      <QouteIcon src={close} alt="open quote" />
    </QuotePageContainer>
  )
}

export default Quote

const QuotePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
  }
`
const QouteContainer = styled.div`
  width: 80%;
  padding: 6rem 0;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 3.5rem 0;
  }
`
const QouteIcon = styled.img`
height: 1.75rem;
@media screen and (max-width: 450px) {
    height:  1.26rem;
  }
`