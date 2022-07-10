import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactLanding from "../components/pages/contact/contactLanding"
import GlobalStateProvider from "../components/context/GlobalStateProvider"
import { graphql } from "gatsby"
const SecondPage = ({data}) => {
  console.log('data', data.allContentfulFooterContent.edges[0].node)
  return (
  <GlobalStateProvider>
    <div>
      <Layout
        venueInfoDescription={ data.allContentfulFooterContent.edges[0].node}
        menuImage={data.allContentfulLandingPageContent.edges[0].node.menuImage}
      >
        <SEO title="Contact" />
        <ContactLanding data={data}/>
      </Layout>
    </div>
  </GlobalStateProvider>
)}

export default SecondPage

export const data = graphql`
query ContactQuery {
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
  allContentfulContactUsPageContent {
    edges {
      node {
        id
        formSectionHeading
        formSectionIntroduction {
          raw
        }
        contactText {
          raw
        }
        heroImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
  allContentfulLandingPageContent {
    edges {
      node {
        menuImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
}

`
