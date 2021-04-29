import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import {
  MenuButton,
  P,
  Button,
} from "../components/styled-components/GlobalStyles"
import { color, font } from "../components/styled-components/variables"
import Landing from "../components/pages/landing/landing"
const SecondPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Landing />
  </Layout>
)

export default SecondPage

const { cream, green, error } = color
const { bc1, bc2, bc3, h1, formLabels } = font
