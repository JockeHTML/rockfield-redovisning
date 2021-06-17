import React, { useState } from "react";
import classes from "./header.module.css";
import { navigationData } from "../../Data";
import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import { productsData } from "../../Data.js";

const Header = () => {
  const [active, setActive] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setActive(false);
    } else {
      setActive(false);
    }
  };

  return (
    <div className={classes.header}>
      <Logo />
      <div className={classes.content}>
        <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <li className={classes.extra}>
            <Link href="/tjanster">Tjänster</Link>
            <i className="fas fa-angle-down"></i>
          </li>
          <div className={active ? classes.activeDropdown : null}>
            <ul>
              {active
                ? productsData.map((data, index) => {
                    const { title, link } = data;
                    return (
                      <li onClick={() => setActive(false)} key={index}>
                        <Link href={link}>{title}</Link>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </ul>
        <div className={classes.rest}>
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
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Header;
