import styles from './styles'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";
import Link from "next/link";

function valuetext(value) {
  return `${value}°C`;
}


const ProductCategory = ({ productData, categoriesData }) => {

  const totalProducts = productData.total;
  const currentPage = productData.page;
  const numPages = productData.last_page;

  const router = useRouter();
  const [products, setProducts] = useState(productData.data);
  const [params, setParams] = useState({});
  const [optionsCategories, setOptionsCategories] = useState(categoriesData.map((element) => {
    return { value: element._id, label: element.category_name.toString() }
  }));
  const [optionsSort, setOptionsSort] = useState(
    [
      { value: 'priceAsc', label: 'Order by price: low to high' },
      { value: 'priceDesc', label: 'Order by price: high to low' }
    ]
  );
  const [selectSort, setSelectSort] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [value1, setValue1] = useState([20, 37]);
  const minDistance = 10;

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
    setParams({ ...params, page: index });
  }

  function handleSelectSort(event) {
    setSelectSort(event.target.value)
    setParams({ ...params, orderBy: event.target.value });
  }

  function handleSelectCategories(event) {
    setSelectCategory(event.target.value);
    setParams({ ...params, categories: event.target.value });
  }

  function handleChangeFilterPrice(event, newValue, activeThumb) {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  }

  const renderFilterPrice = () => {
    return (
      <div>
        <h3>Filter by price</h3>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={value1}
          onChange={handleChangeFilterPrice}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
          <p>${value1[0]} - ${value1[1]}</p>
      </div>
    );
  }

  const renderSortCategories = () => {
    return (
      <div className="flex-column">
        <h3>Categories</h3>
        <FormControl fullWidth size='small'>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={selectCategory.value}
            label="Category"
            onChange={handleSelectCategories}
            sx={{ borderRadius: 40, borderColor: '00000' }}
          >
            {optionsCategories.map((opt, key) =>
              <MenuItem value={opt.value} key={key}>{opt.label}</MenuItem>
            )}
          </Select>
        </FormControl>
        <style jsx>{styles}</style>
      </div>
    );
  }

  const renderSortProducts = () => {
    return (
      <div className="price-filter-wrapper">
        <Typography>Showing {products.length} of {totalProducts} results</Typography>
        <FormControl size='small' sx={{ width: 300 }} >
          <InputLabel id="demo-simple-select-label">Order by</InputLabel>
          <Select
            id="demo-simple-select"
            value={selectSort.value}
            label="Order by"
            onChange={handleSelectSort}
            sx={{ borderRadius: 40, borderColor: '00000' }}
          >
            {optionsSort.map((opt, key) =>
              <MenuItem value={opt.value} key={key}>{opt.label}</MenuItem>
            )}
          </Select>
        </FormControl>
        <style jsx>{styles}</style>
      </div>
    );
  }

  const renderProductList = () => {
    return (
      <div className="product-list-wrapper">
        {products.map((product, idx) => (
            <Link href={`/products/${product._id}`}>
                <div className="product-card flex-column" key={idx}>
                    <div className="product-img">
                        <img src={product.images[0].url} alt={product.images[0].name} />
                    </div>
                    <div className="product-detail">
                        <p className="product-title">{product.name}</p>
                        <p className="product-price">${product.price}</p>
                    </div>
                </div>
            </Link>

        ))}
        <style jsx>{styles}</style>
      </div>
    );
  }

  const renderPagination = () => {
    return (
      <div className="flex-row">
        {Array.from(Array(numPages).keys()).map((page, idx) => {
          return page + 1 === currentPage ? (
            <button onClick={() => handleNextPage(page + 1)} key={idx} className="page-item active">
              {page + 1}
            </button>
          ) : (
            <button onClick={() => handleNextPage(page + 1)} key={idx} className="page-item">
              <span>{page + 1}</span>
            </button>
          )
        }
        )}
        <style jsx>{styles}</style>
      </div>
    );
  }

  return (
    <section className="elementor-section">
      <div className="category-container">
        <div className="flex-row">
          <div className="side-left category-filter-container">
            {renderFilterPrice()}
            {renderSortCategories()}
          </div>
          <div className="side-right product-list-container">
            {renderSortProducts()}
            {renderProductList()}
            {renderPagination()}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </section>
  )
}

export default ProductCategory
