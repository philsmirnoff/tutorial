import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
  }

  const { expense } = props;
    return (
      <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expense.map(item => (
          <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
          />
        ))}
      </Card>
      </div>
    )
}
    //  <div className="expenses">
    // //   <ExpenseItem
    // //   title={props.expense[0].title}
    // //   amount={props.expense[0].amount}
    // //   date={props.expense[0].date}
    // //    />
    // //    <ExpenseItem
    // //   title={props.expense[1].title}
    // //   amount={props.expense[1].amount}
    // //   date={props.expense[1].date}
    // //    />
    // //    <ExpenseItem
    // //   title={props.expense[2].title}
    // //   amount={props.expense[2].amount}
    // //   date={props.expense[2].date}
    // //    />
    // //     <ExpenseItem
    // //   title={props.expense[3].title}
    // //   amount={props.expense[3].amount}
    // //   date={props.expense[3].date}
    // //    />
    // // </div>
    // // );
// }

export default Expenses
