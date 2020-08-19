import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import 'whatwg-fetch' // for IE Edge fetch (not covered by core-js)
// import Routes from "./components/start-simple/routes"
// import Routes from "./components/start-layout/routes"
// import Routes from "./components/start-people/routes"
// import Routes from "./components/start-context/routes"
import Routes from './components/start-forms/routes'
// import Routes from "./components/start-no-api-demo/routes"

import AppProvider from './components/start-context/app-provider'

import '../stylesheets/index.scss'

let target = document.createElement('div')
target.id = 'main'
document.body.appendChild(target)

render((
  <AppProvider>
    <Router>
      <Routes />
    </Router>
  </AppProvider>
), target)
