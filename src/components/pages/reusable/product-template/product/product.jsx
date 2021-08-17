import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import {P} from '../../../../styled-components/GlobalStyles'
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../../context/GlobalContextProvider"
// import useLocalStorage from '../../../../context/useLocalStorage'
import ProductQauntityDropdown from './dropdown/ProductQauntityDropdown'
import Slider from './ProductCarousel.jsx/Slider'
import CheckBoxes from './checkboxes/CheckBoxes'
import DatePicker from '../order-section/date-picker/DatePicker'
import DeliveryOptions from './delivery-options/DeliveryOptions'
const Product = ({product}) => {
  const [selected, setSelected] = useState(0)
  const [delivery, setDelivery] = useState("Delivery")
  const [productDetails, setProductDetails] = useState()
  const [qauntity, setQauntity] = useState(1)
  const [itemToOrder, setItemToOrder] = useState(
    
  )
  // const [cart, setCart] = useLocalStorage("cart", []);
  useEffect(() => {
   if(product) setProductDetails(product.product)
  }, [product])
 
    
      useEffect(() => {
     
       setItemToOrder({...itemToOrder, ['amount']: qauntity})
      }, [qauntity])

      const addToCart = () => {
        
        

        // if (cart.length === 0) {
        //   const newCart = []
        //   newCart.push(itemToOrder)
        //   setCart(newCart)
                
        //       } else if (cart.some(e => e.item.endpointId === endpointId))  {
        //         const update = cart.some(check)
        //         function check(item, i) {
         
        //           if (item.item.endpointId === endpointId) 
        //           {const newCart = [...cart];
        //           newCart[i].amount = itemToOrder.amount + newCart[i].amount
        //           setCart(newCart)}
        //             console.log(cart)
        //         }
        //       } else {
        //         const addToExistingCart = cart.slice()
        //         addToExistingCart.push(itemToOrder)
        //         setCart(addToExistingCart)
        //       }

           

      //   if (cart.some(e => e.item.endpointId === endpointId)) 
      //   {
      //     setItemToOrder({...itemToOrder, ['amount']: qauntity })
      //     const c = cart.slice()
          

      // }
       

    //     if (cart.length === 0) {
    //       const newCart = []
    //       newCart.push(itemToOrder)
    //       setCart(newCart)
    //       console.log(`cart`, cart)
    //     } else {
    //       const addToExistingCart = cart.slice()
    //       addToExistingCart.push(itemToOrder)
    //       setCart(addToExistingCart)
    //     }
      
    //     dispatch({
    //       type: "CART",
    //       items: state.cartItems + 1,
    //       cartProducts: itemToOrder
    //     })
    // if (state.cartProducts.length > -1) {
      
    //   dispatch({
    //     type: "CART",
    //     items: state.cartItems + 1,
    //     cartProducts: itemToOrder
    //   })
    // } else if (state.cartProducts.some(e => e.item.endpointId === endpointId)) {
    //   dispatch({
    //     type: "CART",
    //     items: state.cartItems + 1,
    //     cartProducts: itemToOrder
    //   })
    // }
}
       
// console.log(product.product)






    return (
        <ProductContainer>
           
        </ProductContainer>
    )
}

export default Product

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
min-height: 100vh;
margin-bottom: 9.5rem;
`
export const ProductTextConatiner = styled.div`
width: 40%;
height: 10rem;

`
export const ProductInfoContainer = styled.div`
width: 80%;
`
export const ProductPurchaseContainer = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
flex-direction: column;
`
export const ProductPurchaseContainerRow = styled.div`
display: flex;

`
export const ProductCarousel = styled.div`

height: 100vh;
width: 60%;
`

export const ProductCatagory = styled(P)`
margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    font-size: .75rem;
    margin-bottom: 1rem;
}
`
export const ProductTitle = styled(P)`
font-size: 2.25rem;
  @media screen and (max-width: 450px) {
    font-size: 2rem;
    margin-bottom: 1rem;
}
`
export const ProductPrice = styled(P)`
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`
export const ProductDescription = styled(P)`
  margin-bottom: 1.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`

export const ProductLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  :hover {
    opacity: 75%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
}
`

export const AddToCartButton = styled.button`
    display: flex;
  flex-direction: column;
  width: 48%;
  margin-left: 1%;
  height: 1.9rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  background: #153e35;
  border: none;
  color: #fdf9ee;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
    height: 2.25rem;
}
`