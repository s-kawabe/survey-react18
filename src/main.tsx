import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@unocss/reset/eric-meyer.css'

// React18からはReactDOM.createRootを使用する
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
