import React from "react"
import styled from "styled-components"
import { Img } from "gatsby-image"
import img from "../../../images/placeholders/shopPasta.jpg"

import { P } from "../../styled-components/GlobalStyles"
const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <ContactImage>
        <img src={img} alt="landscape img" />
      </ContactImage>
      <ContactText>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam
      </ContactText>
    </ContactInfoContainer>
  )
}

export default ContactInfo

export const ContactInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 13.37rem;
  @media screen and (max-width: 450px) {
    display: none;
}
`

export const ContactImage = styled.div`
  width: 53%;
  display: flex;
  img {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    display: none;
}
`

export const ContactText = styled.div`
  width: 32%;
  height: 100%;
  @media screen and (max-width: 450px) {
    width: 100%;
}
`
export const PC = styled(P)`
  margin-bottom: 2rem;
`
export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;

  ul {
    list-style-type: none;
  }
  li {
    padding-bottom: 0.25rem;
  }
`
export const Days = styled.div`
  width: 43%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
`
