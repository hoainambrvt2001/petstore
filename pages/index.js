import React from 'react'
import Home from '../components/Home'

export const getServerSideProps = async () => {
  const res = await fetch('https://petstore-backend-iy2e.vercel.app/home')
  const res1 = await fetch('https://petstore-backend-iy2e.vercel.app/blog')
  const data = await res.json()
  const data1 = await res1.json()
  return {
    props: {
      products: data,
      blogs: data1
    },
  }
}

const HomePage = ({ products, blogs }) => {
  return (
    <div>
      <Home products={products} blogs={blogs}  />
    </div>
  )
}

export default HomePage
