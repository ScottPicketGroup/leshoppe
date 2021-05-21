import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactLanding from "../components/pages/contact/contactLanding"
import GlobalStateProvider from "../components/context/GlobalStateProvider"
const SecondPage = (menuOpen, setMenuOpen) => (
  <GlobalStateProvider>
  <div >
    <Layout>
      <SEO title="Contact" />
      <ContactLanding />
    </Layout>
  </div>
  </GlobalStateProvider>
)

export default SecondPage
