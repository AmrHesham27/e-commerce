import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import applyMiddleware from './middleware/index.js'
import { createStore } from 'redux'

const store = createStore(reducer,{},applyMiddleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'))