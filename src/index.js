import React from "react"
import { render } from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'



import App from './main/app'
import reducers from './main/reducers'


render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById("app"))