import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

function ProductButton(props) {
  return (
    <span className={classes.button}>
      <Link href="/products">
        <a href="" className={classes.btn}>
          {props.children}
        </a>
      </Link>
    </span>
  );
}

export default ProductButton;
