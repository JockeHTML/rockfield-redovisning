import React from "react";
import classes from "./emailjs.module.css";

function Emailjs() {
  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        myForm.emailAddr.value
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  return (
    <div className={classes.formWrapper}>
      <div className={classes.title}>
        <h3>Kontaka oss via formuläret</h3>
      </div>
      <form className={classes.form}>
        <input id="contact_number" type="hidden" name="contact_number" />
        <label for="contact_number">
          <p>Namn</p>
        </label>
        <input id="user_name" type="text" name="user_name" />
        <label for="user_name">
          <p>E-post</p>
        </label>
        <input id="user_phone" type="text" name="user_phone" />
        <label for="user_phone">
          <p>Telefon</p>
        </label>
        <input id="user_email" type="email" name="user_email" />
        <label for="user_email">
          <p>Meddelande</p>
        </label>
        <textarea name="message" />
        <input className={classes.btn} type="submit" value="Skicka" />
      </form>
    </div>
  );
}
export default Emailjs;

/*function sendEmail(e) {
    /*import emailjs from "emailjs-com";
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }*/
