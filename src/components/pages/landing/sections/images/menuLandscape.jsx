import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { ImgLandscape } from './image-components'
const MenuLandscape = ({menuImage}) => {


    return (
        <ImgLandscape image={getImage(menuImage)} full/>
  
    )
}

export default MenuLandscape

