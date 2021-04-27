import React from 'react'
import styled from 'styled-components'
import { Page } from '../../styled-components/GlobalStyles'
import About from './sections/about'
import Hero from './sections/hero'
import Intro from './sections/intro'
import Quote from './sections/qoute'
const Landing = () => {
    return (
        <Page>
            <Hero/>
            <Intro/>
            <About/>
            <Quote/>
        </Page>
    )
}

export default Landing