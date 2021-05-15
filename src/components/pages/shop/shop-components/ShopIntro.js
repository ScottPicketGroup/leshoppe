import React from 'react'
import styled from 'styled-components'
import { P } from '../../../styled-components/GlobalStyles'
const ShopIntro = () => {
    return (
        <ShopIntroContainer>
        <h1>Le Shoppe Merchandise</h1>
        <P bc2>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
        </P>
        </ShopIntroContainer>
    )
}

export default ShopIntro

export const ShopIntroContainer = styled.div`
width: 33%;
margin-top: 6rem;
h1 {
    margin-bottom: 2.25rem;
}
p {
    margin-bottom: 2.25rem;
}
@media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
}
`