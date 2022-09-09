// import React, { useState, useEffect } from "react"
// import { update } from "react-spring"
// import styled from "styled-components"
// import QauntityBox from "./QauntityBox"
// const Item = ({ item, qauntity, subTotal, setSubtotal }) => {
//   const [itemQauntity, setItemQantity] = useState(qauntity)
//   const [itemTotalPrice, setItemTotalPrice] = useState(
//     item.price * itemQauntity
//   )
//   const { title, description, price, image, category } = item
//   const bla = 0

//   useEffect(() => {
  
//     setSubtotal(subTotal => subTotal + itemTotalPrice)
   
//    }, [])
  
// useEffect(() => {
//   const abcd = itemQauntity * price
//   setItemTotalPrice(abcd)
  
  
// }, [itemQauntity])


//   return (
//     <ItemContainer>
//       <ProductImageContainer>
//         <ProductImage src={image} />
//       </ProductImageContainer>
//       <Column />
//       <ItemDetailsContainer>
//         <Category> {category}</Category>
//         <Title> {title}</Title>
//       </ItemDetailsContainer>
//       <Column />
//       <Column />
//       <QauntityBox
//         itemQauntity={itemQauntity}
//         setItemQantity={setItemQantity}
//       />
//       <Column />
//       <Price>{itemTotalPrice}</Price>
//     </ItemContainer>
//   )
// }

// export default Item

// export const ItemContainer = styled.div`
//   display: flex;
//   width: 100%;
//   border-bottom: 1px solid rgba(21, 62, 53, 50%);
//   padding: 1.75rem 0;
//   :first-child {
//     border-top: 1px solid rgba(21, 62, 53, 50%);
//   }
// `

// export const ProductImageContainer = styled.div`
//   width: 16.6%;
//   aspect-ratio: 4/3;
//   background: #ffffff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// export const ProductImage = styled.img`
//   height: 80%;
// `
// export const Column = styled.div`
//   width: 8%;
// `

// export const ItemDetailsContainer = styled.div`
//   width: 33%;
//   display: flex;
//   justify-content: space-between;
// `

// export const Category = styled.div`
//   width: 45%;
//   color: grey;
// `
// export const Title = styled.div`
//   width: 45%;
// `
// export const Price = styled.div`
//   width: 8%;
//   display: flex;
//   justify-content: flex-end;
// `
