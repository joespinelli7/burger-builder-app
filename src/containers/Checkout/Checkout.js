import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactInfo from './ContactInfo/ContactInfo';

class Checkout extends React.Component {
  state={
    ingredients: null,
    price: 0
  }

  // componentWillMount: so we can set up state prior to rendering children component
  componentWillMount() {
    // URLSearchParams: an API for working with query parameters that is accessible in the browser
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // param[0], param[1] = ['salad', '1']
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1]; // + makes it an integer
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: price
    })
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancelled={this.checkoutCancelledHandler}
          onCheckoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.url + '/contact-data'}
          render={(props) => (<ContactInfo ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>) }
        />
      </div>
    );
  }
}

export default Checkout;
