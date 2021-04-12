import React from "react";
import classes from "./emailjs.module.css";

function Emailjs() {
  return (
    <div className={classes.formWrapper}>
      <div className={classes.title}>
        <h3>Kontaka oss via formuläret</h3>
      </div>
      <form className={classes.form}>
        <input id="contact_number" type="hidden" name="contact_number" />
        <label htmlFor="contact_number">
          <p>Namn</p>
        </label>
        <input id="user_name" type="text" name="user_name" />
        <label htmlFor="user_name">
          <p>E-post</p>
        </label>
        <input id="user_phone" type="text" name="user_phone" />
        <label htmlFor="user_phone">
          <p>Telefon</p>
        </label>
        <input id="user_email" type="email" name="user_email" />
        <label htmlFor="user_email">
          <p>Meddelande</p>
        </label>
        <textarea name="message" />
        <input className={classes.btn} type="submit" value="Skicka" />
      </form>
    </div>
  );
}
export default Emailjs;
