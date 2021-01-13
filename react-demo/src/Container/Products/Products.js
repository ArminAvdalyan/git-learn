import React from "react";

import { productDates } from "../../data.mockup/products.mockup.js";
import Product from "../../Components/Product/Product.js";

import "./Products.scss";

class Products extends React.Component {
  render() {
    return (
      <div >
        {productDates.map(el => {
          return <Product key ={el.id} name={el.name} surName={el.surName} proffession={el.proffession} className=".inline-style"/>;
        })}
      </div>
    )
  }
}

export default Products;
