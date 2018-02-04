import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import App from './App';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
              rootReducer,
              applyMiddleware(
                thunkMiddleware,
                )
            );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
