import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStateProvider from "../components/context/GlobalStateProvider"

const SecondPage = (menuOpen, setMenuOpen) => {
  return (
    <GlobalStateProvider>
      <Layout>
        <SEO title="Home" />
      </Layout>
    </GlobalStateProvider>
  )
}

export default SecondPage
