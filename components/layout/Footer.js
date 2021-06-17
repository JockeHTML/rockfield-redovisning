import React from "react";
import classes from "./footer.module.css";
import { contactData, navigationData } from "../../Data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.title}>
        <h3>Rockfield Redovisning</h3>
        <p>
          Din klippa inom redovisningstjänster. Vi på Rockfield Redovisning har
          många års erfarenhet inom redovisningsbranschen och ser fram emot att
          få hjälpa dig och ditt företag.
        </p>
      </div>
      <div className={classes.contact}>
        <h3>Kontakt</h3>
        <ul>
          {contactData.map((data, index) => {
            const { text, src, icon } = data;
            return (
              <li key={index}>
                <a href={src}>
                  <i className={icon}></i>
                  <p>{text}</p>
                </a>
              </li>
            );
          })}
          <li className={classes.extra}>
            <i className="fas fa-map-marker-alt"></i>
            <p>Ponnyvägen 6,</p>
          </li>
          <p>857 50 SUNDSVALL</p>
        </ul>
      </div>
      <div className={classes.links}>
        <h3>Länkar</h3>
        <ul>
          {navigationData.map((data, index) => {
            const { title, link } = data;
            return (
              <li key={index}>
                <i className="fas fa-angle-right"></i>
                <Link href={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.social}>
        <h3>Följ oss</h3>
        <ul>
          <li>
            <a
              target="_blank"
              alt="facebook"
              href="https://www.facebook.com/rockfieldredovisning"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
