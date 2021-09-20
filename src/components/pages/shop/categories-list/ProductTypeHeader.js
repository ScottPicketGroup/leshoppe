import React from 'react'
import {HeaderWrapper, HeaderItem} from './category-list.css'
const ProductListHeader = ({productTypes, setActiveProductType}) => {
    
    return (
        <HeaderWrapper>
            {productTypes && productTypes.map((item, i)=> (
                <HeaderItem
                key={i}
                onClick={() => setActiveProductType(item)}
                >{item}</HeaderItem>
            ))}
        </HeaderWrapper>
    )
}

export default ProductListHeader