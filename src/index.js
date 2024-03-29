import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { persistStore } from 'redux-persist'

import App from './App/App.js'

import Store from './App/Store'

const persistor = persistStore(Store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
