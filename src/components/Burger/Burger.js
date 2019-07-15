import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // Object.keys is a default JS object which has a keys method that extracts extracts keys from given
  // object and returns an array of those keys. Doing this to take state of BurgerBuilder (which is an object)
  // and return an array of subarrays with length of each ingredient array which equals total # of that ingredient.
  let arrayIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
      })
    })
    .reduce((arr, el) => {
      if (el[0] && el[0].props.type === 'salad') {
        let newArr = [...el, ...arr];
        return newArr;
      }
      return arr.concat(el)
    }, []);

  if(arrayIngredients.length === 0) {
    arrayIngredients = <p>Please add ingredients to burger.</p>
  }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
