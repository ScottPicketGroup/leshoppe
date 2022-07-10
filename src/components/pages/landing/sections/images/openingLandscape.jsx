import { getImage } from "gatsby-plugin-image"
import React from "react"
import { ImgLandscape } from "./image-components"
const OpeningLandscape = ({venueInfoHorizontalImage}) => {
  return <ImgLandscape image={getImage(venueInfoHorizontalImage)} />
}

export default OpeningLandscape
