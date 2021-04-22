import React from "react";
import classes from "./products.module.css";
import Product from "./Product";
import { productsData } from "../../../Data";
import Button from "../../ui/Button";
import BorderButton from "../../ui/BorderButton";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();

  return (
    <div className={classes.products}>
      <h1>Våra tjänster</h1>
      <div className={classes.content}>
        {productsData.map((product, index) => {
          const { title, text, link } = product;
          return <Product key={index} title={title} text={text} link={link} />;
        })}
      </div>
      <div className={classes.buttons}>
        <Button>Läs mer</Button>
        <BorderButton>Kontakt</BorderButton>
      </div>
    </div>
  );
};

export default Products;
