const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
  return {
    counter: state.counter - 1,
  };
}

const store = redux.createStore(counterReducer);
console.log(store.getState())
// whatever our state changes this function needs to be executed
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState)
}

store.subscribe(counterSubscriber);


// dispatching action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
