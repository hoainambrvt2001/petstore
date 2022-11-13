import styles from './styles'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import Link from "next/link";

const ProductCategory = ({productData, categoriesData}) => {

  const totalProducts = productData.total;
  const currentPage = productData.page;
  const numPages = productData.last_page;

  const router = useRouter();
  const [products, setProducts] = useState(productData.data);
  const [params, setParams] = useState({});
  const [optionsCategories, setOptionsCategories] = useState(categoriesData.map((element) => {
    return {value: element._id, label: element.category_name.toString()}
  }));
  const [optionsSort, setOptionsSort] = useState(
      [
        {value: 'priceAsc', label: 'Order by price: low to high'},
        {value: 'priceDesc', label: 'Order by price: high to low'}
      ]
  );
  const [selectSort, setSelectSort] = useState( '');
  const [selectCategory, setSelectCategory] = useState( '');

  useEffect(() => {
    setProducts(productData.data);
  }, [productData])

  useEffect(() => {
    router.push({
          pathname: '/products',
          query: params
        },
        undefined,
        { shallow: false },
    );
  }, [params]);

  function handleNextPage(index) {
    setParams({...params, page: index});
  }

  function handleSelectSort(event) {
    setSelectSort(event.target.value)
    setParams({...params, orderBy: event.target.value});
  }

  function handleSelectCategories(event) {
    setSelectCategory(event.target.value);
    setParams({...params, categories: event.target.value});
  }

  const renderSortCategories = () => {
    return (
        <div className="product-categories-container">
          <div className="product-categories-content">
            <h5>Product Category</h5>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={selectCategory.value}
                    label="Category"
                    onChange={handleSelectCategories}
                >
                  {optionsCategories.map((opt, key) =>
                      <MenuItem value={opt.value} key={key}>{opt.label}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
          </div>
          <style jsx>{styles}</style>
        </div>
    );
  }

  const renderSortProducts = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>Show {products.length} / {totalProducts} results</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order</InputLabel>
            <Select
                id="demo-simple-select"
                value={selectSort.value}
                label="Order"
                onChange={handleSelectSort}
            >
              {optionsSort.map((opt, key) =>
                  <MenuItem value={opt.value} key={key}>{opt.label}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>
    );
  }

  const renderProductList = () => {
    return (
        <div className="product-list">
          {products.map((product, idx) => (
              <div className="product-item" key={idx}>
                <div className="product-img">
                  <img src={product.images[0].url} alt={product.images[0].name} />
                </div>
                <div className="product-detail">
                  <Link href={`/products/${product.id}`}>
                    <a className="product-link">
                      <h2>{product.name}</h2>
                    </a>
                  </Link>
                  <span className="price">
                    {product.price} <span>$</span>{' '}
                  </span>
                </div>
              </div>
          ))}
          <style jsx>{styles}</style>
        </div>
    );
  }

  const renderPagination = () => {
    return (
        <nav className="woocommerce-pagination">
          <div className="flex-row">
            {Array.from(Array(numPages).keys()).map((page, idx) => (
                <button onClick={() => handleNextPage(page + 1)} key={idx}>
                  {page + 1 === currentPage ? (
                      <div className="page-number active">
                        <span>{page + 1}</span>
                      </div>
                  ) : (
                      <div className="page-number">
                        <span>{page + 1}</span>
                      </div>
                  )}
                </button>
            ))}
          </div>
          <style jsx>{styles}</style>
        </nav>
    );
  }


  return (
    <section className="elementor-section">
      <div className="background-overlay" />
      <div className="elementor-container">
        <div className="elementor-row">
          <div className="elementor-row-left">
            <div className="elementor-column-wrap">
              <div className="elementor-widget-wrap">
                {renderSortCategories()}
              </div>
            </div>
          </div>
          <div className="elementor-row-right">
            <div className="elementor-column">
              <div className="elementor-column-wrapper">
                <div className="woocommerce">
                  {renderSortProducts()}
                  {renderProductList()}
                  {renderPagination()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </section>
  )
}

export default ProductCategory
