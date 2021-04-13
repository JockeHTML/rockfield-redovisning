import React, { useState } from "react";
import classes from "./menu.module.css";
import { navigationData } from "../../../Data";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {openMenu ? (
        <span className={classes.secondIcon}>
          <i onClick={() => setOpenMenu(!openMenu)} className="fas fa-bars"></i>
        </span>
      ) : (
        <span className={classes.firstIcon}>
          <i onClick={() => setOpenMenu(!openMenu)} className="fas fa-bars"></i>
        </span>
      )}

      <div className={openMenu ? classes.menuOpen : classes.menu}>
        {openMenu ? (
          <div className={classes.menuLinks}>
            {navigationData.map((data, index) => {
              const { link, title, id } = data;
              return (
                <h2 key={index}>
                  <a onClick={() => setOpenMenu(false)} href={link}>
                    {title}
                  </a>
                </h2>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
