import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactLanding from "../components/pages/contact/contactLanding"
const SecondPage = (menuOpen, setMenuOpen) => (
  <div >
    <Layout>
      <SEO title="Contact" />
      <ContactLanding />
    </Layout>
  </div>
)

export default SecondPage
