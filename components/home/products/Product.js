import React, { useEffect } from "react";
import classes from "./product.module.css";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const Product = ({ title, text, link, icon }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="800" className={classes.product}>
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
