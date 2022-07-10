import React from 'react'

import {graphql, useStaticQuery } from 'gatsby'
import { ImgPortrait } from './image-components'
import { getImage } from 'gatsby-plugin-image'
const AboutPortrait = ({aboutVerticalImage}) => {




    return (
   <ImgPortrait image={getImage(aboutVerticalImage)}/>
    )
}

export default AboutPortrait


