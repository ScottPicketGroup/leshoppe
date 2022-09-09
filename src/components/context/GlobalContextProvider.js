import React, {useEffect, useState} from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  cartItems: 0,
  cartProducts: []
}



function reducer(state, action) {
  switch (action.type) {
    
    case "WINDOW": {
        return {
          ...state,
          logoLimit: action.logoLimit,
          pageHeight: action.pageHeight,
          footerHeight: action.footerHeight,
        }
      }
      case "PRODUCTS": {
        return {
          ...state,
          products: action.products
        }
      }
      case "CART": {
        return {
          ...state,
          cartItems: action.items,
          cartProducts: [...state.cartProducts, action.cartProducts]
        }
      }
    default:
      throw new Error("Bad Action Type")
  }
}



const GlobalContextProvider = ({ children }) => {
 

  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider