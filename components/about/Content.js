import React from "react";
import ProductButton from "../ui/ProductButton";
import BorderButton from "../ui/BorderButton";
import classes from "./content.module.css";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <img src="./images/staff.jpg" alt="Peter och Niklas" />
      </div>
      <div className={classes.text}>
        <h2>Vår historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          aliquid at excepturi porro voluptatem praesentium quidem dicta fugiat!
          Consequuntur rerum illum magnam, voluptatum repudiandae eum ea dolore
          quod doloribus beatae? Minima quae unde nihil placeat. Cum vel earum
          reprehenderit animi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem
          totam magni. Vero temporibus accusamus commodi nesciunt, placeat
          voluptatibus molestias.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          reprehenderit quisquam, tenetur corrupti architecto eius illum
          voluptatem laudantium adipisci natus.
        </p>
        <div className={classes.buttons}>
          <ProductButton>Tjänster</ProductButton>
          <BorderButton>Kontakt</BorderButton>
        </div>
      </div>
    </div>
  );
};

export default Content;
