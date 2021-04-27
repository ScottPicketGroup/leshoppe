import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ComingSoon from "../components/pages/coming-soon/ComingSoon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<ComingSoon/>
  </Layout>
)

export default IndexPage
