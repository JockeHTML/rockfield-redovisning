import React from "react";
import classes from "./logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <a>
          <img src="./images/logo/Original.png" alt="Rockfield Redovisning" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
