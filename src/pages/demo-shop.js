import React, { useEffect, useState, useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../components/context/GlobalContextProvider"
const DemoShop = () => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
  
   
  const [products, setProducts] = useState([])

  useEffect(() => {
      
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())

      .then(json=>setProducts(json))
  },[])

  console.log(state)
  return (
    <Layout>
      <div
        class=""
        style={{
          height: `100vh`,
          paddingTop: `10rem`
        }}
      >

          {state.theme}
        {/* <pre>
             {JSON.stringify(products, null, 2)}
         </pre> */}
      </div>
    </Layout>
  )
}

export default DemoShop
