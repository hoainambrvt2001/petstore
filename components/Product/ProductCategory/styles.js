import css from 'styled-jsx/css'

export default css`
  .category-container {
    width: 100%;
    height: 100%;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .side-left {
    width: 25%;
  }
  .side-right {
    width: 75%;
  }
  .category-filter-container {
    margin-bottom: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .product-list-container {
    padding: 2rem;
  }
  .product-list-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .price-filter-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .product-card {
    background-color: white;
    padding: 1em;
    width: 300px;
    border:  solid 2px grey;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
      -webkit-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
      -moz-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
    }
    .product-img {
      img {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        margin-bottom: 0.6rem;
      }
    }
    .product-detail {
      width: 100%;
      .product-title {
        color: grey;
        font-size: 16px;
        margin-bottom: 1rem;
        height: 50px;
      }
      .product-price {
        color: black;
        font-size: 16px;
      }
    }
  }
  .page-item {
    margin-right: 1rem;
    border-radius: 50rem;
    width: 40px;
    height: 40px;
    background-color: white;
    color: black;
    border: solid 1px grey;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  .active {
    background-color: grey;
    color: white;
  }
`
