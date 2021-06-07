import React, { useEffect } from "react";
import classes from "./product.module.css";
import Link from "next/link";

const Product = ({ title, text, link, icon }) => {
  return (
    <div className={classes.product}>
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <span>
        <Link href={link}>
          <a href="#" alt={link}>
            Läs mer
          </a>
        </Link>
      </span>
    </div>
  );
};

export default Product;
