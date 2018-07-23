import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';

// Persist redux state into localStorage
const persistedReducer = persistReducer(
  {
    key: 'wouldyourather',
    storage,
  }, 
  rootReducer,
)

const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    createLogger(), // neat middleware that logs actions
  ),
)
let persistor = persistStore(store)

ReactDOM.render( 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
