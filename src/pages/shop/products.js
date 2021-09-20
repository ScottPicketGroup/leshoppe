import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Section2 } from "../../components/styled-components/GlobalStyles"
import CategoryListLanding from "../../components/pages/shop/categories-list/CategoryListLanding"
import ProductListHeader from "../../components/pages/shop/categories-list/ProductTypeHeader"
import ProductsListGrid from "../../components/pages/shop/categories-list/ProductGrid/ProductListGrid"
const Products = ({ location }) => {
  const { title, description, image, products } = location.state.category
  const [productList, setProductList] = React.useState(products)
  const [productTypes, setProductTypes] = React.useState([])
  const [activeProductType, setActiveProductType] = React.useState(
    "All Products"
  )

  useEffect(() => {
    const allProductTypes = ["All Products"]
    location.state.category.products.map(product =>
      allProductTypes.push(product.productType)
    )
    setProductTypes([...new Set(allProductTypes)])
  }, [])

  useEffect(() => {
    activeProductType === "All Products"
      ? setProductList(products)
      : setProductList(
          products.filter(p => p.productType === activeProductType)
        )
  }, [activeProductType])

  return (
    <Layout>
      <SEO title="Products" />
      <Section2>
        <CategoryListLanding
          title={title}
          image={image}
          description={description}
        />
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
  )
}

export default Products
