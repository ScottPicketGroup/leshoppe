import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactLanding from '../components/pages/contact/contactLanding'
const SecondPage = (menuOpen,setMenuOpen) => (
  <>
  
    <Layout>
      <SEO title="Contact" />
   <ContactLanding/>
    </Layout>
  </>
)

export default SecondPage


