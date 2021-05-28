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
    <div
      className={
        router.pathname === "/tjanster" ? classes.white : classes.products
      }
    >
      <h4>Vi hjälper er hela vägen</h4>
      <h1>Våra Tjänster</h1>
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
      <div className={classes.buttons}>
        <Button>Läs mer</Button>
        <BorderButton>Kontakt</BorderButton>
      </div>
    </div>
  );
};

export default Products;
