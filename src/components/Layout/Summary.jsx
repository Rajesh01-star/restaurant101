import React, { Component } from "react";
import classes from "./Summary.module.css";

export default class Summary extends Component {
  render() {
    return (
      <section>
        <div className={classes.container}>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home
          </p>
          <p>
            All our meals are cooked with high-quality ingridients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </section>
    );
  }
}
