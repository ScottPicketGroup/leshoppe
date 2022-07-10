import React from "react"
import { ImgPortrait } from "./image-components"
import { getImage } from "gatsby-plugin-image"
const OpeningPortrait = ({venueInfoVerticalImage}) => {
  return <ImgPortrait image={getImage(venueInfoVerticalImage)} />
}

export default OpeningPortrait
