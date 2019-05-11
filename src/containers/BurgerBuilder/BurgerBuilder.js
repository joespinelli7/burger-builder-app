import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component {
  render() {
    return(
      <Aux>
        <div>
          <Burger />
        </div>
        <div>
          Build Controls for burger
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
