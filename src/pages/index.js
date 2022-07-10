import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/pages/landing/landing"
import GlobalStateProvider from "../components/context/GlobalStateProvider"

const IndexPage = ({ data }) => (
  <GlobalStateProvider>
    <Layout
      venueInfoDescription={data.allContentfulFooterContent.edges[0].node}
      menuImage={data.allContentfulLandingPageContent.edges[0].node.menuImage}
    >
      <SEO title="Home" />
      <Landing data={data} />
    </Layout>
  </GlobalStateProvider>
)

export default IndexPage

export const query = graphql`
  query LandingQuery {
    allContentfulLandingPageContent {
      edges {
        node {
          welcomeImage {
            id
            file {
              fileName
              url
            }
          }
          welcomeText {
            raw
          }
          aboutText {
            raw
          }
          aboutHorizontalImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          aboutVerticalImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          quote {
            raw
          }
          galleryImages {
            title
            gatsbyImageData(placeholder: BLURRED)
          }
          menuImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          venueInfoHeading
          venueInfoGoogleLInk
          venueInfoDescription {
            raw
          }
          venueInfoOpeningTimes {
            raw
          }
          venueInfoHorizontalImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          venueInfoVerticalImage {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulFooterContent {
      edges {
        node {
          openingTimes {
            raw
          }
          address {
            raw
          }
        }
      }
    }
  }
`
