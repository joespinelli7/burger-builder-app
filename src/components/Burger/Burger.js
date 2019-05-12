import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // Object.keys is a default JS object which has a keys method that extracts extracts keys from given
  // object and returns an array of those keys. Doing this to take state of BurgerBuilder (which is an object)
  // and return all the states key and value pairs
  const arrayIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      })
    });

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
