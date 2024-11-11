import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

export default function MealItem(props) {
  console.log(props.meal);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{props.meal.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}
