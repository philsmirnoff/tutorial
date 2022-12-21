import './App.css';
import TodosContextProvider from './store/todos-context';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // }

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   })
  // }


  return (
    // <div className="App">
    //   <NewTodo onAddTodo={addTodoHandler} />
    //  <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    // </div
    <TodosContextProvider>
      <NewTodo />
     <Todos />
    </TodosContextProvider>
  );
}


export default App;
