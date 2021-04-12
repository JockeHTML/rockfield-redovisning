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
        <input type="hidden" name="contact_number" />
        <label>
          <p>Namn</p>
        </label>
        <input type="text" name="user_name" />
        <label>
          <p>E-post</p>
        </label>
        <input type="text" name="user_phone" />
        <label>
          <p>Telefon</p>
        </label>
        <input type="email" name="user_email" />
        <label>
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
