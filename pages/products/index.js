import React from "react";
import Products from "../../components/home/products/Products";
import classes from "./products.module.css";

const ProductsPage = () => {
  return (
    <div className={classes.products}>
      <Products />
    </div>
  );
};

export default ProductsPage;
