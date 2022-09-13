import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';


const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    // to clear the input fields after submitting the form add value props to the input fields
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={enteredUsername} onClick={usernameChangeHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" value={enteredAge} onClick={ageChangeHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}


export default AddUser
