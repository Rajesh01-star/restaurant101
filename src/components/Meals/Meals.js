import React, { Component } from "react";
import AvailableMeals from './AvailableMeals';
import MealsSummary from "./MealsSummary";

export default class Meals extends Component {
  render() {
    return (
      <>
        <MealsSummary />
        <AvailableMeals />
      </>
    );
  }
}
