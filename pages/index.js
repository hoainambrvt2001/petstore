import React from 'react'
import Home from '../components/Home'

export const getServerSideProps = async () => {
  const res = await fetch('https://petstore-backend-iy2e.vercel.app/home')
  const data = await res.json()
  return {
    props: {
      products: data,
    },
  }
}

const HomePage = ({ products }) => {
  return (
    <div>
      <Home products={products} />
    </div>
  )
}

export default HomePage
