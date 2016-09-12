import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_FOO',
  data: '123'
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);
