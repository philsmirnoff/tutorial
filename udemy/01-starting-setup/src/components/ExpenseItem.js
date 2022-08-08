import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 0, 1);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = '$100';

  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}:</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
