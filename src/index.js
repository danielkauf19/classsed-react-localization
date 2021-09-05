import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.js'

import App from './App'
import i18next from './i18n.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'



const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
    <Router>
      <App />
      </Router>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
