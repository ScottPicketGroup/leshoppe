import React from 'react'
import styled from 'styled-components'
import {P} from '../../../styled-components/GlobalStyles'
const FooterContact = () => {
    return (
        <FooterContactContainer>
             <P bc2>CONTACT DETAILS</P>
        <P bc3 style={{padding: `1rem 0`}}>
          Le Shoppe
          <br />
          513 Elizabeth Street <br />
          Melbourne 3000
        </P>
            <OpeningHoursContainer>
          <Days>
            <ul>
              <li>
                <P bc3>Monday</P>
              </li>
              <li>
                <P bc3>Tuesday</P>
              </li>
              <li>
                <P bc3>Wednesday</P>
              </li>
              <li>
                <P bc3>Thursday</P>
              </li>
              <li>
                <P bc3>Friday</P>
              </li>
              <li>
                <P bc3>Saturday</P>
              </li>
              <li>
                <P bc3>Sunday</P>
              </li>
            </ul>
          </Days>
          <Hours>
            <ul>
              <li>
                <P bc3>11:30am–9pm</P>
              </li>
              <li>
                <P bc3>11:30am–9pm</P>
              </li>
              <li>
                <P bc3>11:30am–9pm</P>
              </li>
              <li>
                <P bc3>11:30am–9pm</P>
              </li>
              <li>
                <P bc3>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc3>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc3>11:30am–9pm</P>
              </li>
            </ul>
          </Hours>
        </OpeningHoursContainer>
        </FooterContactContainer>
    )
}

export default FooterContact

export const FooterContactContainer = styled.div`
width: 18.5rem;
height: 100%;

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
  width: 25%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
`