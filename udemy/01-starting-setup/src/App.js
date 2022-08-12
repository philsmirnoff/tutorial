import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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
      <NewExpense />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
