import React from 'react'
import styled from 'styled-components'
import { Page } from '../../styled-components/GlobalStyles'
import LogoFooter from '../reusable/logo-footer/LogoFooter'
import { color, font, padding } from "../../styled-components/variables"
import About from './sections/about'
import Hero from './sections/hero'
import Intro from './sections/intro'
import MenuBoard from './sections/menu-board/MenuBoard'
import OpeningInfo from './sections/opening-info'
import Quote from './sections/qoute'
import Footer from '../reusable/footer/Footer'
const Landing = () => {

    return (
         
        <Page >
            
            <Section1>
            <Hero/>
            <Intro/>
            <About/>
            <Quote/>
            <MenuBoard/>
            <OpeningInfo/>
            <LogoFooter/>
            <Footer/>
            </Section1>
            
        </Page>
     
    )
}

export default Landing

export const Section1 = styled.div`
min-height: 100%;
width: 99vw;
position: absolute;
padding: ${padding.page.vertical} ${padding.page.horizontal};
z-index: 2;
overflow-x: hidden;
background: transperant;
@media(max-width: 700px) {
   width: 100%;
  
}
`