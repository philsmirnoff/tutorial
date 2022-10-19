import { configureStore } from 'redux';

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
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }
  return state;
}

const store = configureStore(counterReducer);
// console.log(store.getState())
// // whatever our state changes this function needs to be executed
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState)
// }

// store.subscribe(counterSubscriber);

// // dispatching action
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });


export default store
