import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 0, 1);
  const expenseTitle = 'Car insurance';
  const expenseAmount = '$100';

  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}:</h2>
        <div className="expense-item_price">${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
