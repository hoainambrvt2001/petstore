import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import axios from 'axios'

const ProductListPage = ({productData, categoriesData}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Product productType={PRODUCT_TYPE.LIST} productData={productData} categoriesData={categoriesData} />
}

export async function getServerSideProps(context) {
  const product_api = `${process.env.BASE_URL}/product`;
  const categories_api = `${process.env.BASE_URL}/categories`;
  const productRes = await axios.get(product_api, {params: context.query});
  const categoriesRes = await axios.get(categories_api);
  // Pass data to the page via props
  return {props: {
      productData: productRes.data,
      categoriesData: categoriesRes.data,
    }};
}

export default ProductListPage
