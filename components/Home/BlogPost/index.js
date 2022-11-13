import styles from './styles'
import Image from 'next/image'
import CardPost from '../CardPost'
const BlogPost = ({ blogs }) => {
  return (
    <div className="container">
      <div className="title">
        <h2>Blog Post</h2>
        <p>Best advices for your pet</p>
      </div>
      {/* <CardPost />
      <CardPost />
      <CardPost /> */}
      {blogs.map((blog, index) => (
        <CardPost key={index} blog={blog} />
      ))}

      <style jsx>{styles}</style>
    </div>
  )
}
export default BlogPost
