import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ComingSoon from "../components/pages/coming-soon/ComingSoon"
import Landing from "../components/pages/landing/landing"
import GlobalStateProvider from "../components/context/GlobalStateProvider"

const IndexPage = () => (
  <GlobalStateProvider>
  <Layout>
    <SEO title="Home" />

<Landing />
  </Layout>
  </GlobalStateProvider>
)

export default IndexPage
