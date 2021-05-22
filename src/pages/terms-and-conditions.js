import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Page } from "../components/styled-components/GlobalStyles"
import { color, font, padding } from "../components/styled-components/variables"
import LogoFooter from "../components/pages/reusable/logo-footer/LogoFooter"
import Footer from "../components/pages/reusable/footer/Footer"
import GlobalStateProvider from "../components/context/GlobalStateProvider"
import FooterLogoSlider from "../components/pages/reusable/logo-footer/ImageSlider"


const TnCs = (menuOpen, setMenuOpen) => (
  <GlobalStateProvider>
  
    <Layout>
      <SEO title="Terms and Conditions" />
     
        <TnCsContainer>
      
          <Section>
            <Heading>
              <h1>Terms and Conditions</h1>
            </Heading>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur? At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.
              Et harum quidem rerum facilis est et expedita distinctio. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi
            </Text>
          </Section>
          <Section >
            <Heading>
              <h1>Privacy Policy</h1>
            </Heading>
            <Text style={{marginBottom: `6.25rem`}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur? At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.
              Et harum quidem rerum facilis est et expedita distinctio. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi
            </Text>
          </Section>
         
        </TnCsContainer>
    
    </Layout>
    </GlobalStateProvider>
)

export default TnCs

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
