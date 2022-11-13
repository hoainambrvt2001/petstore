import React from 'react'
import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
const CardPost = ({ key, blog }) => {
  return (
    <div className="cards" key={key}>
      <article className="card">
        <img src="/image4.jpg" alt="Hot air balloons"></img>

        <div className="content" id="content">
          <div dangerouslySetInnerHTML={{ __html: blog.content.split('. ', 1)[0] }} />
          <Link href={`/blogs/${blog._id}`}>Read more...</Link>
        </div>
      </article>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CardPost
