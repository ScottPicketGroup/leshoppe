import React from 'react'

import LogoFooter from '../reusable/logo-footer/LogoFooter'
import About from './sections/about'
import Hero from './sections/hero'
import Intro from './sections/intro'
import MenuBoard from './sections/menu-board/MenuBoard'
import OpeningInfo from './sections/opening-info'
import Quote from './sections/qoute'
import Footer from '../reusable/footer/Footer'

import { PageBackground, Section1, Test } from '../../styled-components/GlobalStyles'

const Landing = () => {

    return ( 
            <Section1>
                
                <Hero />
         
         <Intro/>
         <About/>
         <Quote/>
         <MenuBoard/>
         <OpeningInfo/>
            </Section1>
    )
}

export default Landing

