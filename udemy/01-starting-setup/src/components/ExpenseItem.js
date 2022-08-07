import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August'6th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance:</h2>
        <div className="expense-item_price">$300</div>
      </div>
    </div>
  )
}

export default ExpenseItem
