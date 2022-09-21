import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// 2. separate function that we will pass to useReducer as a reduce function
const emailReducer = (state, action) => {
  // 10. we check the action type and return the new state
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  // 12. we check the action type and return the new state
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false }
}

const Login = (props) => {
  // 1. we un comment the state and the state change function
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

// 3. we use useReducer to manage the state of the email
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false});

//   useEffect(() => {
//    const identifier = setTimeout(() => {
//     setFormIsValid(
//       enteredEmail.includes('@') && enteredPassword.trim().length > 6
//     );
//   }, 500);

//   return () => {
//     clearTimeout(identifier);
//  };
//   }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // 9. we use dispatch to change the state of the email
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
      );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
// 4 thats where we gonna store the entered vaslue in the state
    setFormIsValid(
      emailState.value.isValid && event.target.value.trim().length > 6
      );
  };
// 5.
  const validateEmailHandler = () => {
    // 11. we use dispatch to change the state of the email
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // 6. we pass the emailState to the onLogin function
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            // 7. we add the emailState.isValid to the class name
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // 8. we add the emailState.value to the value
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
////
