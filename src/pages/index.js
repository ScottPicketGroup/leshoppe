import * as React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/pages/landing/landing"

const IndexPage = () => (

    <Layout>
      <SEO title="Home" />

      <Landing />
    </Layout>
  
)

export default IndexPage
