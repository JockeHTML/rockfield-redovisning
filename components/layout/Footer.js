import React from "react";
import classes from "./footer.module.css";
import Logo from "../layout/Logo";
import { contactData, navigationData, socialMediaData } from "../../Data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.title}>
        <h3>Rockfield Redovisning</h3>
        <ul>
          {" "}
          <p>Din klippa inom redovisningstjänster</p>
        </ul>
      </div>
      <div className={classes.contact}>
        <h3>Kontakt</h3>
        <ul>
          {contactData.map((data, index) => {
            const { text, mail } = data;
            return (
              <li key={index}>
                <p>{text}</p>
                <p>{mail}</p>
              </li>
            );
          })}
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
          {socialMediaData.map((data, index) => {
            const { link, icon, text } = data;
            return (
              <li key={index}>
                <a alt="social media" href={link}>
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
/*<a href="https://www.freepik.com/vectors/security">
            Security vector created by stories - www.freepik.com
          </a>
          <a href="https://www.freepik.com/vectors/work">
            Work vector created by stories - www.freepik.com
          </a>*/
