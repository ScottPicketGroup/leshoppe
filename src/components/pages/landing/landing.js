import React from 'react'
import styled from 'styled-components'
import { Page } from '../../styled-components/GlobalStyles'
import About from './sections/about'
import Hero from './sections/hero'
import Intro from './sections/intro'
import MenuBoard from './sections/menu-board/MenuBoard'
import Quote from './sections/qoute'
const Landing = () => {
    return (
        <Page>
            <Hero/>
            <Intro/>
            <About/>
            <Quote/>
            <MenuBoard/>
        </Page>
    )
}

export default Landing