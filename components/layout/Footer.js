import React from "react";
import classes from "./footer.module.css";
import { contactData, navigationData } from "../../Data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.title}>
        <h3>Rockfield Redovisning</h3>
        <ul>
          <p>Din klippa inom redovisningstjänster</p>
          <li>
            <a href="https://www.freepik.com/vectors/security">
              Security & Work vector created by stories - www.freepik.com
            </a>
          </li>
        </ul>
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
                <Link href={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.social}>
        <h3>Sociala medier</h3>
        <ul>
          <li>
            <a
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
