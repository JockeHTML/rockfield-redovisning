import React from "react";
import classes from "./logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <a href="#">
          <img src="./images/logo/newWhite.png" alt="Rockfield Redovisning" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
