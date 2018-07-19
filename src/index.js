import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
