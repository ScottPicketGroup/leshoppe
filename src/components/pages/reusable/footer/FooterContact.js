import React from 'react'
import styled from 'styled-components'
import {P} from '../../../styled-components/GlobalStyles'
const FooterContact = () => {
    return (
        <FooterContactContainer>
             <Heading>CONTACT DETAILS</Heading>
        <Address>
          Le Shoppe
          <br />
          513 Elizabeth Street <br />
          Melbourne 3000
        </Address>
            <OpeningHoursContainer>
          <Days>
            <ul>
              <li>
                <Text>Monday</Text>
              </li>
              <li>
                <Text>Tuesday</Text>
              </li>
              <li>
                <Text>Wednesday</Text>
              </li>
              <li>
                <Text>Thursday</Text>
              </li>
              <li>
                <Text>Friday</Text>
              </li>
              <li>
                <Text>Saturday</Text>
              </li>
              <li>
                <Text>Sunday</Text>
              </li>
            </ul>
          </Days>
          <Hours>
            <ul>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–11:30pm
</Text>
              </li>
              <li>
                <Text>11:30am–11:30pm
</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
            </ul>
          </Hours>
        </OpeningHoursContainer>
        </FooterContactContainer>
    )
}

export default FooterContact

export const FooterContactContainer = styled.div`
width: 43.3%;

@media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 2.25rem;
    font-size: .75rem;
}
`
export const Heading = styled.div`
margin-bottom: 1.75rem;
@media screen and (max-width: 450px) {
  margin-bottom: 1.5rem;
  font-size: .75rem;
}
`

export const Address = styled.div`
margin-bottom: 2.25rem;
@media screen and (max-width: 450px) {
   margin-bottom: 1rem;
   font-size: .75rem;
}
`
export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: .75rem;

  ul {
    list-style-type: none;
  }
  li{
    font-size: .75rem;
    
  }
 
`
export const Days = styled.div`
  width: 30%;
  margin-right: 1.5rem;
  
  @media screen and (max-width: 450px) {
  margin-right: -2.25rem;
  
}
`
export const Hours = styled.div`
  width: 70%;
`

export const Text = styled(P)`
font-size: 1rem;
@media screen and (max-width: 450px) {
  margin-right: 1.5rem;
  font-size: .75rem !important;
}
`