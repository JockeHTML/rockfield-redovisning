import React from "react";
import styles from "./emailjs.module.css";
import cx from "classnames";
import Content from "./Content";
import emailjs from "emailjs-com";

function Emailjs() {
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
  return (
    <div className={styles.content}>
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
  );
}
export default Emailjs;

/* <label>Attach file:</label>
        <input type="file" name="my_file"></input> */
