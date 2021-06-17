import React from "react";
import classes from "./products.module.css";
import Product from "./Product";
import { productsData } from "../../../Data";

import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();

  return (
    <div
      className={
        router.pathname === "/tjanster" ? classes.white : classes.products
      }
    >
      <h4>ROCKFIELD REDOVISNING</h4>
      <h1>Allt inom redovisning</h1>
      <div className={classes.content}>
        {productsData.map((product, index) => {
          const { title, text, link, icon } = product;
          return (
            <Product
              icon={icon}
              key={index}
              title={title}
              text={text}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
