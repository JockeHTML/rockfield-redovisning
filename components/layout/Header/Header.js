import React from "react";
import classes from "./header.module.css";
import { navigationData } from "../../../Data";
import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <ul>
        {navigationData.map((data, index) => {
          const { id, title, link } = data;
          return (
            <li key={id}>
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Menu />
    </div>
  );
};

export default Header;
