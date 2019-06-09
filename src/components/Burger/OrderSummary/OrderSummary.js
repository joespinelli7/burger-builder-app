import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// turned into a class component to add lifecycle hooks and see when it is updated to save performance
// b/c modal wraps it in BurgerBuilder.js
class OrderSummary extends React.Component {
  // could still be a functional component

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingredientKey => {
        return (
          <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
          </li>
        )
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continute to Checkout?</p>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
