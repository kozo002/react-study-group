import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import TaskAppContainer from "./TaskAppContainer";

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <TaskAppContainer />
  </Provider>,
  document.getElementById('root')
);
