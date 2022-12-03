import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
import rootreducer from './reducer';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log('ACTION_type = ', action.type);
  next(action);
};
const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }

  next(action);
};

const store = createStore(rootreducer, applyMiddleware(logger, thunk));
console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}],
// })
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
