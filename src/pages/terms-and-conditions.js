import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { padding } from "../components/styled-components/variables"
import GlobalStateProvider from "../components/context/GlobalStateProvider"
import { graphql } from "gatsby"
import Renderer from "../components/pages/reusable/rich-text-renderers/FooterContact"

const TnCs = ({ data }) => {
  const {
    termsAndContidtionsHeading,
    termsAndConditionsContent,
    privacyPolicyHeading,
    privacyPolicyContent,
  } = data.allContentfulTermsAndConditionsPageContent.edges[0].node
  return (
    <GlobalStateProvider>
      <Layout
        venueInfoDescription={data.allContentfulFooterContent.edges[0].node}
        menuImage={data.allContentfulLandingPageContent.edges[0].node.menuImage}
      >
        <SEO title="Terms and Conditions" />

        <TnCsContainer>
          <Section>
            <Heading>
              <h1>{termsAndContidtionsHeading}</h1>
            </Heading>
            <Text>
            <Renderer node={termsAndConditionsContent}/>
            </Text>
          </Section>
          <Section>
            <Heading>
              <h1>{privacyPolicyHeading}</h1>
            </Heading>
            <Text style={{ marginBottom: `6.25rem` }}>
             <Renderer node={privacyPolicyContent}/>
            </Text>
          </Section>
        </TnCsContainer>
      </Layout>
    </GlobalStateProvider>
  )
}

export default TnCs

export const query = graphql`
  query termsAndConditionsContent {
    allContentfulTermsAndConditionsPageContent {
      edges {
        node {
          termsAndContidtionsHeading
          termsAndConditionsContent {
            raw
          }
          privacyPolicyHeading
          privacyPolicyContent {
            raw
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

const TnCsContainer = styled.div`
  width: 99vw;
  position: relative;
  z-index: 1;
  overflow-x: hidden;

  padding: 13.5rem ${padding.page.horizontal};
  @media (max-width: 700px) {
    margin-top: 6rem;
    width: 100%;
    padding: 1rem;
  }
`

const Section = styled.div`
  display: flex;
  margin-bottom: 6rem;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`
const Heading = styled.div`
  width: 33%;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
    width: 100%;
  }
`
const Text = styled.div`
  width: 50%;
  background: rgba(253, 249, 238, 75%);
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`
