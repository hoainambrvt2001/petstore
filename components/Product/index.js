import styles from './styles'
import ProductSingle from './ProductSingle'
import Title from 'components/Product/Utils/Title'
import { PRODUCT_TYPE } from 'utils/constant'
import NavBar from 'components/NavBar'
import ProductCategory from "./ProductCategory";

const Product = ({ productType, productData, categoriesData }) => {
  return (
    <div className="product-wrapper">
      <NavBar />
      <Title productType={productType} productName={productType === PRODUCT_TYPE.SINGLE ? productData.name : ''} />
      {productType === PRODUCT_TYPE.SINGLE ? (
        <ProductSingle isModel={false} productSingleData={productData} />
      ) : (
        <ProductCategory productData={productData} categoriesData={categoriesData} />
      )}
      <style jsx>{styles}</style>
    </div>
  )
}

export default Product
