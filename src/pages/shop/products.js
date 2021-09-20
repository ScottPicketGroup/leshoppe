import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Section2 } from "../../components/styled-components/GlobalStyles"
import CategoryListLanding from "../../components/pages/shop/categories-list/CategoryListLanding"
import ProductListHeader from "../../components/pages/shop/categories-list/ProductTypeHeader"
import ProductsListGrid from "../../components/pages/shop/categories-list/ProductGrid/ProductListGrid"
const Products = ({ location, beep }) => {
  const { state = {} } = location

  const [productList, setProductList] = React.useState([])
  const [productTypes, setProductTypes] = React.useState([])
  const [activeProductType, setActiveProductType] = React.useState(
    "All Products"
  )

  

  useEffect(() => {
    setProductList(location.state.category.products)
    const allProductTypes = ["All Products"]
    location.state.category.products.map(product =>
      allProductTypes.push(product.productType)
    )
    setProductTypes([...new Set(allProductTypes)])
  }, [])

  useEffect(() => {
    activeProductType === "All Products"
      ? setProductList(state.category.products)
      : setProductList(
          state.category.products.filter(p => p.productType === activeProductType)
        )
  }, [activeProductType])

 
  return location ? (
    <Layout>
      <SEO title="Products" />
      <Section2>
    {location.state.category ? (
    <CategoryListLanding
      title={location.state.category.title}
      image={location.state.category.image}
      description={location.state.category.description}
    />
    ) : null}
        <ProductListHeader
          productTypes={productTypes}
          setActiveProductType={setActiveProductType}
        />

        <ProductsListGrid
          productList={productList}
          activeProductType={activeProductType}
        />
      </Section2>
    </Layout>
  ) : (
    <div class=""></div>
  )
}

export default Products
