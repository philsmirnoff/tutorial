import ExpenseItem from './components/ExpenseItem';


function App() {
  const expense = [
    {
      id: 1,
      title: 'Car insurance',
      amount: 100,
      date: new Date(2022, 0, 1)
    },
    {
      id: 2,
      title: 'Health insurance',
      amount: 100,
      date: new Date(2022, 5, 5)
    },
    {
      id: 3,
      title: 'MTA',
      amount: 100,
      date: new Date(2022, 7, 7)
    },
    {
      id: 4,
      title: 'Gas',
      amount: 100,
      date: new Date(2021, 0, 1)
    }
  ]

  return (
    <div className="app">
      <h2>Let's get started!</h2>
      <ExpenseItem
      title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}
       />
       <ExpenseItem
      title={expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}
       />
       <ExpenseItem
      title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
       />
        <ExpenseItem
      title={expense[3].title}
      amount={expense[3].amount}
      date={expense[3].date}
       />
    </div>
  );
}

export default App;
