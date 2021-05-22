import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { P } from '../../../styled-components/GlobalStyles';
import Img from 'gatsby-image'

const FooterSlider = ({logos}) => {
 
       const settings = {
      
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 0,
      cssEase: "linear",
      accessibility: false
    };
    return (
        <LogoContainer>
     
        
        <Slider {...settings}>
      {logos.map(logo => (
          <>
          
          <Logo fluid={logo.fluid} alt={logo.description} />
          </>
      ))}
        </Slider>
      </LogoContainer>
    )
}

export default FooterSlider

export const LogoContainer = styled.div`
height: 100%;
`

export const Logo = styled(Img)`
max-height: 100%;
max-width: 3rem;
`