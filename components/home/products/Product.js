import React from "react";
import classes from "./product.module.css";
import {
  ChatIcon,
  ClipboardListIcon,
  ChartBarIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Product = ({ title, text, link }) => {
  const showIcon = () => {
    if (title === "Momsredovisning") {
      return <ClipboardListIcon className={classes.icon} />;
    }
    if (title === "Affärsrådgivning") {
      return <ChartBarIcon className={classes.icon} />;
    }
    if (title === "Redovisning") {
      return <BookOpenIcon className={classes.icon} />;
    }
    if (title === "Löneadministration") {
      return <ChatIcon className={classes.icon} />;
    }
  };

  return (
    <div className={classes.product}>
      {showIcon()}
      <h2>{title}</h2>
      <p>{text}</p>
      <Link href={link}>
        <h4>Läs mer</h4>
      </Link>
    </div>
  );
};

export default Product;
