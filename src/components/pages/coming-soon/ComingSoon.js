import React from "react"

import {
    ChanceryLink,
    Footer,
  LandingContentContainer,
  LandingPageContainer,
  LogoContainer,
  TextContainer,
  Socials
} from "../../styled-components/ComingSoonComponents"
import ComingSoonInfo from "./ComingSoonInfo"
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import LandingLogo from "./LandingLogo"

const ComingSoon = () => {
  return (
    <LandingPageContainer>
      <LandingContentContainer>
         <LogoContainer>
           <LandingLogo/>
         </LogoContainer>
         <TextContainer>
            <ComingSoonInfo/>
            <Footer>
             <ChanceryLink href="http://www.chancerylane.com.au" target="blank">Visit Chancery Lane</ChanceryLink>
             <Socials>
                 <Instagram/>
                 <Facebook/>
             </Socials>
         </Footer>
         </TextContainer>
         
      </LandingContentContainer>
    </LandingPageContainer>
  )
}

export default ComingSoon
