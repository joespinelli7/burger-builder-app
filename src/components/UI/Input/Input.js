import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched && props.value) {
    inputClasses.push(classes.Invalid);
  }

  // validateEmail(email) {
   // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
   //    return true
   //  } else {
   //    return false
   //  }
  // }

  let validationError = null;
  if (props.inputName === "email" && props.value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.value)) {
      validationError = <p className={classes.ValidationError}>Please enter a valid email: (name@example.com).</p>;
    }
  } else if (props.invalid && props.touched && props.value) {
      validationError = <p className={classes.ValidationError}>Please enter a valid {props.inputName.toUpperCase()}.</p>;
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>;
      break;
    case ('select'):
        inputElement = <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}>;
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>;
        break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
}

export default input;
