import React from "react"
import styled from "styled-components"
import open from '../../../../images/logos/quoteOpen.svg'
import close from '../../../../images/logos/quoteClose.svg'
import { P } from "../../../styled-components/GlobalStyles"
const Quote = () => {
  return (
    <QuotePageContainer>
        <QouteIcon src={open} alt="open quote" />
      <QouteContainer>
          
        <h1 style={{fontSize: `2rem`}}>
        We want you to eat really well during your workday, whether it's a quick takeaway baguette, a salad selection for team meetings or a charcuterie platter to take home after work.
        </h1>
        <P style={{fontSize: `1.75rem`, marginTop: `.5rem`}}>- Scott Pickett.</P>
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
  text-align: center;
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