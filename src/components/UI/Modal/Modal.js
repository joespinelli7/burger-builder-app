import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

// turned into class component to go with OrderSummary class component to make sure we don't
// unnecessarily re-render OrderSummary. Modal controls the updating of OrderSummary
class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  componentWillUpdate() {
    console.log('[Modal] will update')
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
