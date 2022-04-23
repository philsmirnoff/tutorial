import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(
  allReducers
  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



// // STORE -> GLOBAL STATE

// // ACTION -> ACTION CREATOR -> DISPATCH -> REDUCER -> STATE
// // ACTION types are strings

// // const INCREMENT = 'INCREMENT'
// // const DECREMENT = 'DECREMENT'

// // ACTION INCREMENT, action is a function that simply returns an object
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

//   const decrement = () => {
//     return {
//       type: 'DECREMENT'
//     }
//   }

// // REDUCER - describes how your actions transforms the state
// // it takes in the current state and the action and returns the new state

// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// // Display the current state of the store
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH - thats the way we can execute the action , it sends the action to the store
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

