import React, { useEffect } from "react";
import classes from "./product.module.css";
import Link from "next/link";

const Product = ({ title, text, link, icon }) => {
  return (
    <div className={classes.product}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <span>
        <Link href={link}>
          <a alt={title}>Till {title}</a>
        </Link>
        <i class="fas fa-angle-right"></i>
      </span>
    </div>
  );
};

export default Product;
