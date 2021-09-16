import React, {useEffect} from 'react'
import styled from 'styled-components'
const BeverageSlider = ({products}) => {
    const [productsList, setProductsList] = React.useState(products)
    const [active, setActive] = React.useState(-1)
    useEffect(() => {
        setProductsList(products)
    }, [products])

    console.log(productsList)
    return (
        <ProductsGrid pos={active}>
            {
                productsList.map((item, i) => (
                    <Product>
                        {item.node.title}       
                    </Product>
                ))
            }

            <button 
            style={{position: `absolute`}}
            onClick={() => setActive(active - 1)}>
                move
            </button>
        </ProductsGrid>
    )
}

export default BeverageSlider

export const ProductsGrid = styled.div`
position: absolute;
height: 20vh;
display: flex;
margin-left: ${props => `${props.pos - 10} vw`};
`

export const Product = styled.div`
width: 10vw;
height: 10vh;


`