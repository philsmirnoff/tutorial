import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
   // if your current state depends on the previous state
  // const [userInout, setUserInput] = useState({
    // enteredTitle: '',
    // enteredDate: '',
    // enteredAmount: ''
  // })

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // if your current state depends on the previous state
    // setUserInput((prevState) => {
      // return {
        // ...prevState, enteredTitle: event.target.value }
      // })
  }



  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
   }
    console.log(expenseData)
  };

 return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={TitleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler} />
      </div>
      <div className='new-expense__control' onChange={DateChangeHandler}>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' />
      </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit">Add Expense</button>
      </div>
      </form>
  )
}

export default ExpenseForm
