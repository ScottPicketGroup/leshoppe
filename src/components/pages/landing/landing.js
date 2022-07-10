import React from "react"
import About from "./sections/about"
import Hero from "./sections/hero"
import Intro from "./sections/intro"
import OpeningInfo from "./sections/opening-info"
import Quote from "./sections/qoute"

import { Section1 } from "../../styled-components/GlobalStyles"
import LaNuit from "./laNuit"
import MenuBoard from "./sections/menu-board/MenuBoard"

const Landing = ({ data }) => {
  const {
    welcomeText,
    aboutText,
    aboutHorizontalImage,
    aboutVerticalImage,
    quote,
    welcomeImage,
    galleryImages,
    venueInfoHeading,
    venueInfoGoogleLInk,
    venueInfoDescription,
    venueInfoOpeningTimes,
    venueInfoHorizontalImage,
    venueInfoVerticalImage,
  } = data.allContentfulLandingPageContent.edges[0].node
  console.log(
    "first",
    data.allContentfulLandingPageContent.edges[0].node.welcomeImage
  )
  return (
    <Section1>
      <Hero />
      <Intro welcomeText={welcomeText} introVideo={welcomeImage} />
      <About
        aboutText={aboutText}
        aboutHorizontalImage={aboutHorizontalImage}
        aboutVerticalImage={aboutVerticalImage}
      />
      {/* <LaNuit /> */}
      <Quote />
      <MenuBoard galleryImages={galleryImages} />
      <OpeningInfo
        venueInfoHeading={venueInfoHeading}
        venueInfoGoogleLInk={venueInfoGoogleLInk}
        venueInfoDescription={venueInfoDescription}
        venueInfoOpeningTimes={venueInfoOpeningTimes}
        venueInfoHorizontalImage={venueInfoHorizontalImage}
        venueInfoVerticalImage={venueInfoVerticalImage}
      />
    </Section1>
  )
}

export default Landing
