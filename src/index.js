import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SpeechProvider } from '@speechly/react-client'
import { Provider } from './context/context'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId='c4f02147-12d7-4751-88e2-092c55a0d031' language='en-US'>
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();