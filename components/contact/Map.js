import React from "react";
import classes from "./map.module.css";

const Map = () => {
  return (
    <div className={classes.map}>
      <iframe
        className={classes.iframe}
        title="Rockfield Redovisning"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.6296551520097!2d17.223355616251943!3d62.413568067031235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46645dd3a3871afd%3A0xb6f08c182af27585!2sPonnyv%C3%A4gen%206%2C%20857%2050%20Sundsvall!5e0!3m2!1ssv!2sse!4v1617977125765!5m2!1ssv!2sse"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default Map;
