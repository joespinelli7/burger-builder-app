import React from 'react';
import classes from './Backdrop.css'

// backdrop is greyish screen that pops up around order summary modal
const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
