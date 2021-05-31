import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact2.module.css";
import cx from "classnames";
import Aos from "aos";
import "aos/dist/aos.css";
import Map from "./Map";
import Content from "./Content";

/* Email code setup via EmailJS for a simple and quick email service */

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_206hzpv",
      "template_byl1c47",
      e.target,
      "user_WCegDg1lg7n89Cavfa2QJ"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

function Contact2(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.formWrapper}>
      <div className={styles.border}>
        <h4>ROCKFIELD REDOVISNING</h4>
        <h1>Kontakta Oss Idag</h1>
      </div>
      <div className={styles.content}>
        <div data-aos="fade-up" className={styles.text}>
          <h2>Har du frågor eller funderingar?</h2>
          <p>
            Skicka ett meddelande via formuläret här intill så återkopplar vi
            till dig, alternativt kontakta oss via telefon eller e-post.
          </p>
          <Content />
        </div>
        <form autoComplete="off" onSubmit={sendEmail} className={styles.form}>
          <div className={cx(styles.input, styles.name)}>
            <input
              autoComplete="off"
              placeholder="Vad är ditt namn?"
              type="text"
              name="name"
            />
          </div>
          <div className={cx(styles.input, styles.email)}>
            <input
              autoComplete="off"
              placeholder="Vad är din e-post?"
              type="text"
              name="email"
            />
          </div>
          <div className={cx(styles.input, styles.message)}>
            <textarea
              autoComplete="off"
              placeholder="Skriv ditt meddelande"
              type="text"
              name="message"
            />
          </div>
          <button type="submit" className={styles.formButton}>
            Skicka
          </button>
        </form>
      </div>
      <Map />
    </div>
  );
}

export default Contact2;
