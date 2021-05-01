import React from "react"
import styled from "styled-components"
import { Img } from "gatsby-image"
import img from "../../../images/placeholders/contactLandscape.jpg"
import { P } from "../../styled-components/GlobalStyles"
const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <ContactImage>
        <img src={img} alt="landscape img" />
      </ContactImage>
      <ContactText>
        <PC bc1>
          Le Shoppe, Chancery Lane is the latest edition to the Pickett & Co.
          stable of venues. Fill in your details here to send us a message and
          tick the box to be first to hear about all the exciting things we’ve
          got planned.
          </PC>
          <PC bc1>
            {" "}
            Follow the links at the bottom of the page to our social pages so
            you don’t miss any of the action.
          </PC>
        
        <P bc1>Le Shoppe</P>
        <P bc1>513 Elizabeth Street </P>
        <PC bc1>Melbourne 3000</PC>
        
        <OpeningHoursContainer>
          <Days>
            <ul>
              <li>
                <P bc1>Monday</P>
              </li>
              <li>
                <P bc1>Tuesday</P>
              </li>
              <li>
                <P bc1>Wednesday</P>
              </li>
              <li>
                <P bc1>Thursday</P>
              </li>
              <li>
                <P bc1>Friday</P>
              </li>
              <li>
                <P bc1>Saturday</P>
              </li>
              <li>
                <P bc1>Sunday</P>
              </li>
            </ul>
          </Days>
          <Hours>
            <ul>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc1>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
            </ul>
          </Hours>
        </OpeningHoursContainer>
      </ContactText>
    </ContactInfoContainer>
  )
}

export default ContactInfo

export const ContactInfoContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 6.75rem;
`

export const ContactImage = styled.div`
  width: 53%;
  img {
    width: 100%;
  }
`

export const ContactText = styled.div`
  width: 32%;
  height: 100%;
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
  li{
    padding-bottom: .25rem;
  }
`
export const Days = styled.div`
  width: 43%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
`