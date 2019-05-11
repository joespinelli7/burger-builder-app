import React from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends React.Component {
  render() {
    return(
      <Aux>
        <div>
          Burger displayed w/ ingredients
        </div>
        <div>
          Build Controls for burger
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
