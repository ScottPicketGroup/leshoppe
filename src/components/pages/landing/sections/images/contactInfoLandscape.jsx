import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql, useStaticQuery } from 'gatsby'
import { ImgLandscape } from './image-components'
import { getImage } from 'gatsby-plugin-image'

const ContactLandscape = ({image}) => {



    return (
        <ImgLandscape image={getImage(image)} full/>
    )
}

export default ContactLandscape

