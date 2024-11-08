import React, { Component } from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

export default class Header extends Component {
  render() {
    const count = 0;

    return (
    <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="a table of food" />
    </div>
    </>
    );
  }
}
