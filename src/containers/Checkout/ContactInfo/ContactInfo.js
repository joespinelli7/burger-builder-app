import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    // baseURL established so you can add whatever name to create a new node (orders here) then
    // have to add .json for firebase (requirement)
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Joe Spinelli',
        address: {
          street: 'Teststreet 1',
          zipcode: '126942',
          country: 'USA'
        },
        email: 'test@aol.com',
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false
        })
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
        <Input inputtype="input" type="text" name="street" placeholder="Street" />
        <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>);
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactInfo}>
        <h4>Enter your Contact Information:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
