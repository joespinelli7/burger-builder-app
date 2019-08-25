import React from 'react';
import classes from './Button.css';

// pass in [classes.Button, classes.[props.btnType]] as an array b/c we want to assign the button class but then conditionally
// add the success or danger btn. (btnType will be a prop passed that will either be 'Danger' or 'Success' to render correct styling)
const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
