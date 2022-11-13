import Link from 'next/link'
import styles from './styles'

const Products = ({ products }) => {
  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {products.map((_el, idx) => (
              <li className="product" key={idx}>
                <div className="product-img">
                  <img src={_el.images[0].url} alt="Product 1" />
                </div>
                <div className="product-detail">
                  <span className="product-category">{_el.categories[0].category_name}</span>
                  <a href={`/products/${_el._id}`} className="product-link">
                    <h2>{_el.name}</h2>
                  </a>
                  <span className="price">
                     <span>$</span>{_el.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Products
