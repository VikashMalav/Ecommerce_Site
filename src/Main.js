import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import Store from './App/store'
function Main() {
  return (
    <div>
        <Provider store={Store}>
        <App/>
        </Provider>
    </div>
  )
}

export default Main