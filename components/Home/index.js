import { useState, useEffect } from 'react'
import styles from './styles'
// import ProductInformation from 'components/Product/Utils/ProductInformation'
// import Link from 'next/link'
// import { MIN_DESKTOP_WIDTH, MODEL_WIDTH_ABOVE_DESKTOP, MODEL_WIDTH_BELOW_DESKTOP } from 'utils/constant'
// import { formatVNprice } from 'utils/function'

import NavBar from 'components/NavBar'
import Slider from './Slider'
import FeaturedProduct from './FeaturedProduct'
import BlogPost from './BlogPost'
import Footer from 'components/Footer'

const Home = ({ products, blogs }) => {
  return (
    <div className="container">
      <NavBar />
      <Slider />
      <FeaturedProduct trendingProducts={products.trendingProducts}  />
      <BlogPost blogs={blogs} />
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Home
