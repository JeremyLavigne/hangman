import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

// TODO : 
// add tests


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,  document.getElementById('root'))