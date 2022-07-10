import React from 'react'
import { ImgLandscape } from './image-components'
import { getImage } from 'gatsby-plugin-image'
const AboutLandscape = ({aboutHorizontalImage}) => {


    return (
        <ImgLandscape image={getImage(aboutHorizontalImage)} marginBottom="3.5rem"/>
    )
}

export default AboutLandscape
