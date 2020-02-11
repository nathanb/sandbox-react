import React from 'react'
import {render} from 'react-dom'
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"
// import Routes from "./components/start-simple/routes"
// import Routes from "./components/start-layout/routes"
// import Routes from "./components/start-people/routes"
// import Routes from "./components/start-context/routes"
import Routes from "./components/start-forms/routes"

import AppProvider from "./components/start-context/app-provider"

import "../stylesheets/index.scss"

const customHistory = createBrowserHistory()
const target = document.querySelector('#main')

render((
  <AppProvider>
    <Router history={customHistory}>
      <Routes />
    </Router>
  </AppProvider>
), target)
