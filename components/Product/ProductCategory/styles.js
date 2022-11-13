import css from 'styled-jsx/css'

export default css`
  .elementor-section {
    background-color: transparent;
    background-image: linear-gradient(180deg, #ffffff 0%, #f8f8f8 80%);
    padding: 20px 10px 30px 10px;

    .background-overlay {
    }

    .elementor-container {
      max-width: 1200px;
      display: flex;

      .elementor-row {
        display: flex;
        width: 100%;
        .elementor-row-left,
        .elementor-row-right {
          display: flex;
          position: relative;
          .elementor-column {
            display: flex;
            width: 100%;
            min-width: 140%;
            max-width: 140%;
            height: 100%;
            .elementor-column-wrapper {
              width: 100%;
              padding: 20px;
              display: flex;
              .woocommerce {
                width: 100%;
                .woocommerce-result-count {
                  color: #222222;
                  margin: 0 0 1rem;
                  float: left;
                }
                .woocommerce-ordering {
                  margin-bottom: 2.5rem;
                  float: right;
                  vertical-align: top;
                  .select-order {
                    width: 250px;
                    padding: 8px;
                    color: #666;
                    background: #fafafa;
                    border-radius: 50px;
                    border: 1px solid #eaeaea;
                    outline: none;
                  }
                }
                .product-list {
                  margin-top: 6.5rem;
                  padding-left: 0;
                  display: flex;
                  align-items: flex-start;
                  justify-content: left;
                  flex-wrap: wrap;

                  .product-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    height: 30rem;
                    width: 20rem;
                    padding: 15px;
                    box-shadow: 0px 0px 10px -8px rgb(0 0 0 / 50%);
                    border: 1px solid #efefef;
                    border-radius: 15px;
                    z-index: 10;
                    margin: 10px;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                    .product-img {
                      position: relative;
                      img {
                        width: 300px;
                        height: 300px;
                        object-fit: cover;
                        margin-bottom: 0.6rem;
                      }
                      span {
                        position: absolute;
                        bottom: 1.5rem;
                        left: 1rem;
                        right: 1rem;
                        padding: 1rem 0;
                        background-color: #ffffffef;
                        text-transform: uppercase;
                        font-weight: 700;
                        color: #1b73eb;
                        transition: all 0.2s ease-in-out;
                        &:hover {
                          cursor: pointer;
                          color: #0a0a0a;
                        }
                      }
                    }
                    .product-detail {
                      width: 100%;
                      text-align: left;
                      font-family: 'Montserrat', sans-serif;
                      font-weight: 600;
                      .product-category {
                        color: #222;
                        font-size: 0.85rem;
                        margin-bottom: 0.5rem;
                        display: block;
                        line-height: 1.3;
                        opacity: 0.6;
                      }
                      .product-link {
                        color: #333;
                        text-decoration: none;

                        padding: 0;
                        font-size: 0.7rem;
                        h2 {
                          /* overflow: hidden; */
                          /* text-overflow: ellipsis; */
                          /* white-space: nowrap; */
                          margin: 0;
                          margin-bottom: 8px;
                        }
                      }
                      .price {
                        width: 100%;
                        font-size: 18px;
                        font-weight: 700px;
                        color: #273172;
                        margin-bottom: 0.5rem;
                        line-height: 1.3;
                        cursor: text;
                        span {
                          text-decoration: underline;
                        }
                      }
                    }

                    &:hover {
                      box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
                      -webkit-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
                      -moz-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
                    }
                  }
                }
                .woocommerce-pagination {
                  margin-top: 30px;
                  margin-left: 30px;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  .flex-row {
                    flex-direction: row ;
                    button {
                      border: none;
                      outline: none;
                      background-color: transparent;
                    }
                  }
                  .page-number {
                    display: block;
                    margin: 0 5px 5px 0;
                    float: left;
                    overflow: hidden;
                    span {
                      text-align: center;
                      color: #1e73be;
                      border: 1px solid #1e73be;
                      border-radius: 15px;
                      margin: 0;
                      text-decoration: none;
                      line-height: 1;
                      font-size: 1rem;
                      font-weight: 400;
                      padding: 0.75rem;
                      display: block;
                      min-width: 2.5rem;
                      cursor: pointer;
                      transition: all 0.2s ease-in-out;
                      &:hover {
                        background-color: #1e73be;
                        color: #fff;
                      }
                    }
                  }
                  .active {
                    background-color: #1e73be;
                    border-radius: 15px;
                    span {
                      color: #fff;
                    }

                  }
                }
              }
            }
          }
          
        }

        .elementor-row-left {
          width: 35%;
          .elementor-column-wrap {
            width: 100%;

            .elementor-widget-wrap {
              padding: 20px;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              .product-categories-container {
                width: 100%;
                position: relative;

                .product-categories-content {
                  margin: 20px 0;

                  h5 {
                    margin: 0;
                    padding-bottom: 15px;
                    font-size: 18px;
                    color: #222222;
                  }

                  .selection-container {
                    display: inline-block;
                    width: 100%;
                    border-radius: 99px;
                    padding: 0.75em;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    outline: none;
                    position: relative;

                    .selection-content {
                      width: 90%;
                      color: #444;
                      display: block;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;

                      .selection-rendered {
                        width: 100%;
                        .selection-content-clear {
                          cursor: pointer;
                          float: right;
                          font-weight: 700;
                        }
                      }

                      .selection-content-arrow {
                        top: 50%;
                        width: 1.7em;
                        transform: translateY(-50%);
                        height: 26px;
                        position: absolute;
                        right: 10px;
                        cursor: pointer;

                        b {
                          /* border-color: transparent transparent #888 transparent; */
                          /* border-width: 0 4px 5px 4px; */
                          /* margin-top: -9px; */
                          margin-top: -3px;
                          border-color: #888 transparent transparent transparent;
                          border-width: 5px 4px 0 4px;
                          border-style: solid;
                          height: 10px;
                          left: 100%;
                          margin-left: -10px;
                          position: absolute;
                          top: 50%;
                          width: 0;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .elementor-row-right {
          width: 100%;
        }
      }
    }
  }
`
